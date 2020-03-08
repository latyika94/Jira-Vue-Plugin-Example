const mappings = new Map();

/**
 * External modules - are amd or es6 modules that exist outside this source code. e.g from JIRA or aui. These
 * modules will be required using window.require (which in JIRA land means almond).
 */
mappings
    .set("jquery", {
        dependency: ["com.atlassian.plugins.jquery:jquery"],
        import: {
            "amd": "jquery",
            "var": "jQuery"
        }
    })
    .set("aui/flag", {
        dependency: ["com.atlassian.auiplugin:aui-flag"],
        import: {
            "amd": "aui/flag",
            "var": "require('aui/flag')" // AJS.flag didn't get defined until AUI 5.9 :lolwut:
        }
    })
    .set("wrm/require", {
        dependency: ["com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager"],
        import: {
            "amd": "wrm/require",
            "var": "WRM.require"
        }
    })
    .set("wrm/data", {
        dependency: ["com.atlassian.plugins.atlassian-plugins-webresource-plugin:data"],
        import: {
            "amd": "wrm/data",
            "var": "WRM.data"
        }
    })
    .set("wrm/context-path", {
        dependency: ["com.atlassian.plugins.atlassian-plugins-webresource-plugin:context-path"],
        import: {
            "amd": "wrm/context-path",
            "var": "AJS.contextPath"
        }
    })

module.exports = mappings;
