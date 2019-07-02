<template>
    <div style="fontSize:50px;fontWeight:bold;lineHeight:200px;">
        <ul>
            <li id="step1">1111111111111</li>
            <li id="step2">2222222222222</li>
            <li id="step3">3333333333333</li>
            <li id="step4">4444444444444</li>
            <li id="step5">5555555555555</li>
            <img src="@/assets/logo.png" alt="">
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        mounted(){
            this.$intro().setOptions({
                prevLabel:"上一步",
                nextLabel:"下一步",
                skipLabel:"跳过",
                doneLabel:"结束",
                steps: [
                    {
                        intro: '<img src="https://pulsardev.github.io/vue-tour/img/logo.82b9c7a5.png" style="height: 20px;">'
                    },
                    {
                        intro: "You <b>don't need</b> to define element to focus, this is a floating tooltip."
                    },
                    {
                        element: document.querySelector('#step1'),
                        intro: "This is a tooltip."
                    },
                    {
                        element: document.querySelectorAll('#step2')[0],
                        intro: "Ok, wasn't that fun?",
                        position: 'right'
                    },
                    {
                        element: '#step3',
                        intro: 'More features, more fun.',
                        position: 'left'
                    },
                    {
                        element: '#step4',
                        intro: "Another step.",
                        position: 'bottom'
                    },
                    {
                        element: '#step5',
                        intro: 'Get it, use it.'
                    }
                ]
            }).start().onbeforeexit(function () {
                // return confirm("确定要跳过引导吗？？？");
            });
            // this.$intro()
            // this.$intro().addHints(); // show hints
            // this.$intro().showHints(); // show hints
            // this.$intro().exit(); //退出
            /*this.$intro().oncomplete(function() {
                alert("end of introduction");
            });*/
            /*this.$intro().onexit(function() {
                return confirm("exit of introduction");
            });*/
        },
        methods:{

        }
    }
</script>

<style scoped>
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 20px;
    }
    li{

    }
</style>
