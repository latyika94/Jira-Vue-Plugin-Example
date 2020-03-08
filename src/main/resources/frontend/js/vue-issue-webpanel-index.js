import Vue from 'vue'
import VueIssueWebPanel from './VueIssueWebPanel.vue'
import jQuery from 'jquery'

require('../scss/main.scss');

Vue.config.productionTip = false

jQuery('#jira-issue-vue-webpanel-inner').ready(() => {
    new Vue({
        el: '#jira-issue-vue-webpanel-inner',
        template: '<VueIssueWebPanel/>',
        components: { VueIssueWebPanel }
    })
})