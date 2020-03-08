This example show how you can bundle tools listing belows in an Atlassian Jira plugin.

 - Node.js
 - Yarn
 - Vue.js
 - Webpack
 - SCSS / SASS

In this exmaple you can see, how you can create a web panel, and place in a right side of an Jira Issue, which content based on Vue 2 powered by [atlassian-webresource-webpack-plugin](https://www.npmjs.com/package/atlassian-webresource-webpack-plugin).

**Requirements**
 - Atlassian SDK
 - Node.js
 - Yarn

 **Build plugin**
Run `atlas-package` command in the root directory.

**Test plugin in Jira localhost webapp**
Run `atlas-run` command in the root directory. After the webapp has been initialized open [http://localhost:2990/jira](http://localhost:2990/jira) in browser. Create a sample project and open an issue.
You will see a new web panel with name "Vue Web Panel" on the right side of issue. In this webpanel you can generate random numbers and calculate the average of generated numbers (see: `VueIssueWebPanel.vue`).