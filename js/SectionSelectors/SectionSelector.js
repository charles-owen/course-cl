/**
 * @file
 * The section selector page /cl/sectionselector
 */

/**
 * The section selector page /cl/sectionselector
 * @param element Page element (#cl-section-selector)
 * @param site Site object
 * @constructor
 */
export let SectionSelector = function(element, site) {
    let Vue = site.Vue;

    const info = JSON.parse(element.textContent);
    const sections = info.sections;
    const before = info.before;
    const after = info.after;

    let template = `
<div id="cl-section-selector">
  <site-header :title="title"></site-header>
    <div class="content">
      <div v-html="before"></div>
        <div class="centerbox cl-selector">
          <p v-for="section in sections"><button @click.prevent="select(section)">{{section.course}} {{section.nice}} Section {{section.section}}</button></p>
        </div>
       <div class="left" v-html="after"></div>
     </div>
   <site-footer></site-footer>
</div>`;

    const Header = site.info.header.component();
    const Footer = site.info.footer.component();

    let router = new Site.VueRouter({
        mode: 'history',
        routes: []
    });

    new Vue({
        router,
        el: element,
        data: {
            title: 'Section Selector',
            before: before,
            after: after,
            sections: sections,
            select: function(section) {
                let params = {
                    semester: section.semester,
                    section: section.section
                }
                Site.api.post('/api/course/members/sectionselect', params)
                    .then((response) => {
                        if(response.hasError()) {
                            Site.toast(this, response);
                        } else {
                            window.location = this.redirect;
                        }

                    })
                    .catch((error) => {
                        Site.toast(this, error);
                    });
            }
        },
        mounted: function() {
            this.redirect = this.$route.query.u;
            if(this.redirect === undefined || this.redirect === null) {
                this.redirect = Site.root;
            }
        },
        template: template,
        components: {
            'site-header': Header,
            'site-footer': Footer
        }
    })
}

SectionSelector.install = function(site) {
    let en;
    if( (en = document.getElementById('cl-section-selector')) !== null) {
        new SectionSelector(en, site);
    }
}
