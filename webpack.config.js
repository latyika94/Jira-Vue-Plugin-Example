const path = require("path");
const {DefinePlugin} = require("webpack");
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WrmPlugin = require("atlassian-webresource-webpack-plugin");

const PLUGIN_KEY = "com.lmajnar.atlassian.plugin.wrm.jira-wrm-plugin";

const MVN_OUTPUT_DIR = path.join(__dirname, "target", "classes");
const FRONTEND_SRC_DIR = path.join(__dirname, "src", "main", "resources", "frontend");
const NODE_MODULES_DIR = path.join(__dirname, "node_modules");

const providedDependencies = require(path.resolve(FRONTEND_SRC_DIR, "wrm-dependencies-conf.js"));

const {VueLoaderPlugin} = require("vue-loader")

module.exports = {
    mode: "production",
    context: FRONTEND_SRC_DIR,
    entry: {
        "generalInit": "./js/vue-issue-webpanel-index.js",
        "exportInit": "./js/export-init.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env"]
                    }
                }]
            },
            {
                test: /\.(?:css)$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    "vue-style-loader",
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.soy$/i,
                loader: "soy-loader"
            }
        ],
    },

    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin(),
        new DefinePlugin({
            // outputs a literal string with the plugin key value in it
            PLUGIN_KEY: `"${PLUGIN_KEY}"`,
            // disables debug output in soy templates
            "goog.DEBUG": false,
        }),
        new WrmPlugin({
            pluginKey: PLUGIN_KEY,
            contextMap: {
                "generalInit": ["atl.general"],
                "exportInit": ["atl.general"]
            },
            providedDependencies: providedDependencies,
            xmlDescriptors: path.resolve(MVN_OUTPUT_DIR, "META-INF", "plugin-descriptors", "wr-webpack-bundles.xml")
        })
    ],
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        },
        modules: [
            path.resolve(FRONTEND_SRC_DIR),
            path.resolve(NODE_MODULES_DIR)
        ],
        plugins: [
            new DirectoryNamedWebpackPlugin()
        ]
    },
    output: {
        filename: "bundle.[name].js",
        path: path.resolve(MVN_OUTPUT_DIR),
        library: 'outputLibrary'
    }
};
