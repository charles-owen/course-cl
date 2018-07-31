let Vue = Site.Vue;

let SectionSelector = function() {

}

SectionSelector.start = function(site) {

    site.ready(() => {

        let element, sections=[], before='', after='';
        if( (element = document.getElementById('cl-section-selector')) !== null) {
            let info = JSON.parse(element.textContent);
            sections = info.sections;
            before = info.before;
            after = info.after;
        }

        let template = `<div id="section-selector"><site-header :title="title"></site-header>
  <div class="content">
  <div v-html="before"></div>
    <div class="centerbox section-select">
        <p v-for="section in sections"><button @click.prevent="select(section)">{{section.course}} {{section.nice}} Section {{section.section}}</button></p>
    </div>
    <div class="left" v-html="after"></div>
  </div>
<site-footer></site-footer>
</div>`;

        const Header = site.info.header.component();
        const Footer = site.info.footer.component();

        element = document.querySelector('div.cl-sectionselector');

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
    });

}

SectionSelector.start(Site.Site);