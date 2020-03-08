<template>
    <div>
        <hr>
        <div>{{ i18n.text }}</div>
        <div class="margin">
            <button class="aui-button aui-button-primary" @click="genRandomNumber">{{ i18n.generate }}</button>
            <div class="right">{{ generatedNumberMessage }}</div>
        </div>
        <div>{{ generatedNumbersMessage }}</div>
        <hr>
        <div class="color-primary-x">{{ average }}</div>
    </div>
</template>

<script>
    import collect from "collect.js";

    export default {
        data() {
            return {
                i18n: {
                    text: AJS.I18n.getText("com.test.plugin.text"),
                    generate: AJS.I18n.getText("com.test.plugin.button")
                },
                generatedNumbers: []
            }
        },
        computed: {
            generatedNumberMessage() {
                return AJS.I18n.getText("com.test.plugin.generated", [collect(this.generatedNumbers).last()])
            },
            generatedNumbersMessage() {
                return AJS.I18n.getText("com.test.plugin.array", [this.generatedNumbers.join(", ")])
            },
            average() {
                return AJS.I18n.getText("com.test.plugin.avg", [collect(this.generatedNumbers).avg()])
            }
        },
        methods: {
            genRandomNumber() {
                this.generatedNumbers.push(this.getRandomInt(50))
            },
            getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
        }
    }
</script>

<style lang="scss">
    .margin {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .right {
        float: right;
    }
</style>
