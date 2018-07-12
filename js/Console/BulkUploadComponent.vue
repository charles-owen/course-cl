<template>
  <div class="cl-bulk-upload">
    <h2 id="bulk">Bulk course membership uploading</h2>
    <p>This option accepts files in CSV format as produced by instructor systems. </p>

    <form class="full" @submit.prevent="bulkUpload()" method="post" enctype="multipart/form-data">
      <fieldset>
        <legend>Bulk Upload File</legend>
        <div>
          <div>File to upload: </div>
          <div>
            <p><input name="bulkfile" type="file" @change="bulkFiles = $event.target.files"></p>
            <p><input type="submit" value="Press"> to upload the file!</p>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
    import Dialog from 'dialog-cl';
    import MemberDropsComponent from './MemberDropsComponent.vue';
    import {Member} from '../Members/Member.js';
    let Vue = Site.Vue;

    export default {
      data: function() {
          return {
              bulkFiles: null,
          }
      },
      methods: {
          bulkUpload: function() {
              if (this.bulkFiles === null || this.bulkFiles.length < 1) {
                  return;
              }

              let file = this.bulkFiles[0];
              let reader = new FileReader();

              // Closure to capture the file information.
              reader.onload = (e) => {
                  const member = this.$store.state.user.user.member;
                  let data = {
                      file: e.target.result,
                      semester: member.semester,
                      section: member.section
                  }

                  Site.api.post('/api/course/members/bulk', data)
                      .then((response) => {
                          if(!response.hasError()) {
                              let drops = response.getData('drops');
                              if(drops !== null && drops.attributes.length > 0) {
                                  let dropsForVue = [];
                                  drops.attributes.forEach((drop) => {
                                      console.log(drop);
                                      let user = new Users.User(drop);
                                      user.drop = false;
                                      dropsForVue.push(user);
                                  });

                                  new Dialog({
                                      title: 'Dropped Course Members',
                                      content: '<div id="drops"></div>',
                                      addClass: 'cl-bulk-upload-dlg',
                                      buttons: [
                                          {
                                              contents: 'Drop',
                                              focus: true,
                                              click: (dialog) => {
                                                  dialog.close();

                                                  let ids = [];
                                                  dropsForVue.forEach((user) => {
                                                     if(user.drop) {
                                                         ids.push(user.member.id);
                                                     }
                                                  });
                                                  if(ids.length > 0) {
                                                      Site.api.post('/api/course/members/drops', {drops: ids})
                                                          .then((response) => {
                                                              if(!response.hasError()) {
                                                                  window.history.go();

                                                              } else {
                                                                  console.log(response);
                                                                  Site.toast(this, response);
                                                              }

                                                          })
                                                          .catch((error) => {
                                                              console.log(error);
                                                              Site.toast(this, error);
                                                          });
                                                  } else {
                                                      window.history.go();
                                                  }

                                              }
                                          },
                                          {
                                              contents: 'Cancel',
                                              focus: true,
                                              click: (dialog) => {
                                                  dialog.close();

                                              }
                                          }
                                      ]


                                  });

                                  // Create a Vue inside the dialog box
                                  console.log(dropsForVue);
                                  new Vue({
                                      el: '#drops',
                                      data: function() {
                                          return {
                                              drops: dropsForVue
                                          }
                                      },
                                      template: `<drops :drops="drops"></drops>`,
                                      components: {
                                          'drops': MemberDropsComponent
                                      }
                                  })
                              } else {
                                  window.history.go();
                              }

                          } else {
                              console.log(response);
                              Site.toast(this, response);
                          }

                      })
                      .catch((error) => {
                          console.log(error);
                          Site.toast(this, error);
                      });


              };

              reader.onerror = function (e) {
                  Site.toast(this, "Error reading file");
              };

              reader.onabort = function (e) {
                  Site.toast(this, "File read aborted");
              };

              // Read in the file
              reader.readAsText(file);
          }
      }
  }
</script>

// Notice: Not scoped!
<style lang="scss">
  div.cl-bulk-upload {
    form {
      margin-bottom: 1em;
    }

    fieldset {

      > div {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        > div {
          padding-right: 1em;

          p {
            margin: 0 0 0.5em 0;
          }

          p:last-child {
            margin: 0;

            input {
              width: 6.5em;
            }
          }
        }
      }
    }
  }

  div.cl-bulk-upload-dlg {
    width: 400px;

  }


</style>