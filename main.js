uni._rawComponents={awaitscreen:{execTree:{context:0,closure:"",children:[{context:1,closure:'\n      this.screenName = "AwaitButton";\n      this.bindState(state => {\n        if (state.screen != this.screenName)\n          return\n        if (this.paused)\n          this.play();\n      })\n      onInput = () => {\n        if (this.paused || !document.body.initPressed) return;\n        document.getElementById("selectAudio").play();\n        console.log("transition");\n        this.setState({screen: "MenuNewGame", prevScreen: document.body.state.screen});\n        setTimeout(() => {\n          this.remove();\n        },500);\n      }\n      document.body.onkeypress = onInput;\n      document.body.onclick = onInput; \n    ',children:[{context:1,closure:"",children:[]}]}]},srcBuffer:'<template>\n  <video muted loop class="screen screen-await AwaitButton">\n    \n    <source src="assets/AwaitButton.mp4" type="video/mp4">\n  </video>\n</template>'},canvascreen:{execTree:{context:0,closure:"",children:[{context:1,closure:'\n            this.imports = [\'TextSprite\', \'ImageSprite\', \'ConfigContainer\', \'LoadContainer\'];\n            var body = document.body;\n            var screens = body.querySelectorAll(".screen");\n            var screenIntro = body.find(".screen-intro");\n            var selectAudio = document.getElementById("selectAudio");\n            var calcSize = () => {\n                var scale, origin;\n                var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\n                var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;\n                scale = Math.min(\n                    h / this.offsetHeight,    \n                    w / this.offsetWidth\n                );\n\n                this.style.transform = "translate(-50%, -50%) " + "scale(" + scale + ")"\n                this.style.top = h / 2 + "px";\n                console.log("calcsize")\n            }\n            window.addEventListener("resize", calcSize);\n            calcSize();\n            this.onFullLoad = () => {\n                var config = this.find(".config-hover"); \n                var newGame = this.find(".newgame-hover");\n                var loadGame = this.find(".loadgame-hover");\n                var configBG = this.find(".ConfigBG");\n                var spinner = this.find(".loading-menu");\n                var configContainer = this.find("#ConfigContainer")\n                body.spinner = spinner;\n\n                var checkIntroPressed = () => {\n                    if (body.state.screen == "Intro" && !screenIntro.userPressed){\n                        document.body.find(".Intro").playbackRate = 1.55;\n                        document.body.find(".screen-await").remove();\n                        this.find(".loading").style.opacity = 1;\n                        screenIntro.userPressed = true;\n                        selectAudio.play();\n                        console.log("userPressed");\n                    }\n                }\n                window.addEventListener("click", checkIntroPressed);\n                window.addEventListener("keypress", checkIntroPressed);\n                config.addEventListener("click", () => {\n                    if (!config.usable || body.inTransition){\n                        return;\n                    }\n                    spinner.style.opacity = 1;\n                    config.style.opacity = 0;\n                    setTimeout(() => {\n                        configBG.style.opacity = 1;\n                        configBG.src = configBG.src;\n                        setTimeout(() => {\n                            configContainer.style.opacity = 1;\n                        }, 500);\n                    }, document.body.configPressed ? 1000 : 2000);\n                    this.setState({screen: "MenuConfig", prevScreen: body.state.screen});\n                });\n                newGame.addEventListener("click", () => {\n                    if (!newGame.usable || body.inTransition){\n                        return;\n                    }\n                    newGame.style.opacity = 0;\n                    spinner.style.opacity = 1;\n                    configBG.style.opacity = 0;\n                    configContainer.style.opacity = 0;\n                    this.setState({screen: "MenuNewGame", prevScreen: body.state.screen});\n                });\n                loadGame.addEventListener("click", () => {\n                    if (!loadGame.usable || body.inTransition){\n                        return;\n                    }\n                    loadGame.style.opacity = 0;\n                    spinner.style.opacity = 1;\n                    configBG.style.opacity = 0;\n                    configContainer.style.opacity = 0;\n                    this.setState({screen: "MenuLoadGame", prevScreen: body.state.screen});\n                });\n            };\n        ',children:[{context:1,closure:"",children:[]},{context:3,closure:"",children:[]},{context:5,closure:"",children:[]},{context:7,closure:"",children:[]},{context:9,closure:"",children:[]},{context:11,closure:"",children:[]},{context:13,closure:"",children:[]},{context:15,closure:"",children:[]}]}]},srcBuffer:'<template>\n    <div class="canvaScreen">\n        \n        <img class="screen ConfigBG" src="assets/ConfigBG.gif">\n        <configcontainer></configcontainer>\n        <loadcontainer></loadcontainer>\n        <textsprite src="assets/sprites/newgame_hover.png" subclass="newgame-hover" screens="MenuLoadGame MenuConfig"></textsprite>\n        <textsprite src="assets/sprites/config_hover.png" subclass="config-hover" screens="MenuLoadGame MenuNewGame"></textsprite>\n        <textsprite src="assets/sprites/loadgame_hover.png" subclass="loadgame-hover" screens="MenuConfig MenuNewGame"></textsprite>\n        <imagesprite src="assets/sprites/loading.png" subclass="spinning loading"></imagesprite>\n        <imagesprite src="assets/sprites/loading.png" subclass="spinning loading-menu"></imagesprite>\n    </div>\n</template>'},configcontainer:{execTree:{context:0,closure:"",children:[{context:1,closure:"",children:[{context:1,closure:"",children:[{context:1,closure:"",children:[]}]},{context:3,closure:'\n                this.imports = ["ConfigItem"];\n                this.onFullLoad = () => {\n                    var items = this.children;\n                    for (let i = 0; i < items.length; i++){\n                        items[i].style.right = `-${i*10}px`;\n                    }\n                }\n            ',children:[{context:1,closure:"",children:[]},{context:3,closure:"",children:[]},{context:5,closure:"",children:[]},{context:7,closure:"",children:[]},{context:9,closure:"",children:[]},{context:11,closure:"",children:[]},{context:13,closure:"",children:[]}]}]}]},srcBuffer:'<template>\n    <div id="ConfigContainer">\n        <div class="title">\n            <h1>Config</h1>\n        </div>\n        <div class="item-list">\n            \n            <configitem desc="Vibration" toggle="on"></configitem>\n            <configitem desc="Dialogue Voices" toggle="on"></configitem>\n            <configitem desc="Auto-Advance" toggle="off"></configitem>\n            <configitem desc="Animation Subtitles" toggle="off"></configitem>\n            <configitem desc="Cursor Memory" toggle="on"></configitem>\n            <configitem desc="Battle Memory" toggle="on"></configitem>\n            <configitem desc="Persona Memory" toggle="on"></configitem>\n        </div>\n    </div>\n</template>'},configitem:{execTree:{context:0,closure:"",children:[{context:1,closure:'\n            this.find(".desc").innerText = this.props.desc;\n            var containStyle = this.parentElement.parentElement.style;\n            var body = document.body;\n            var selector = this.find(".selector");\n            var hoverSound = document.getElementById("hoverAudio");\n            var selectSound = document.getElementById("selectAudio");\n            var toggleImg = this.find("img");\n            var toggle = true;\n            if (this.props.toggle){\n                toggleImg.src = `assets/sprites/config_${this.props.toggle}.png`;\n                toggle = this.props.toggle == "on";\n            }\n            this.onFullLoad = () => {\n                this.addEventListener("mouseenter", () => {\n                    if (body.state.screen != "MenuConfig" || !containStyle.opacity){\n                        return;\n                    }\n                    this.style.cursor = "pointer";\n                    selector.style.display = "block";\n                    hoverSound.play();\n                });\n                this.addEventListener("mouseleave", () => {\n                    if (body.state.screen != "MenuConfig" || !containStyle.opacity){\n                        return;\n                    }\n                    this.style.cursor = "auto";\n                    selector.style.display = "none";\n                });\n                this.onclick = () => {\n                    if (body.state.screen != "MenuConfig" || !containStyle.opacity){\n                        return;\n                    }\n                    toggle = !toggle;\n                    toggleImg.src = `assets/sprites/config_${toggle ? "on" : "off"}.png`;\n                    selectSound.play();\n                }\n            }\n        ',children:[{context:1,closure:"",children:[]},{context:3,closure:"",children:[{context:1,closure:"",children:[]}]},{context:5,closure:"",children:[]}]}]},srcBuffer:'<template>\n    <div class="config-item">\n        \n        <div class="selector"></div>\n        <div class="toggle">\n            <img width="135" src="assets/sprites/config_on.png">\n        </div>\n        <div class="desc"></div>\n    </div>\n</template>'},imagesprite:{execTree:{context:0,closure:"",children:[{context:1,closure:'\n            var img = this.find("img");\n            img.src = this.props.src;\n            img.setAttribute("usemap", "#map");\n            if (this.props.subclass){\n                this.props.subclass.split(" ").forEach(cl => {\n                    this.classList.add(cl);\n                })\n            }\n        ',children:[{context:1,closure:"",children:[]}]}]},srcBuffer:'<template>\n    <div class="sprite image-sprite">\n        \n        <img height="100%">\n    </div>\n</template>'},infobar:{execTree:{context:0,closure:"",children:[{context:1,closure:"",children:[{context:1,closure:"",children:[{context:1,closure:"",children:[]},{context:3,closure:"",children:[]}]}]},{context:3,closure:"",children:[]}]},srcBuffer:'<template>\n    <a style="color:#111" href="https://github.com/AnyThony/persona-menu" target="_blank">\n        <div id="InfoBar">\n            <img src="assets/github.svg" height="30">\n            <span>GitHub Repo</span>\n        </div>\n    </a>\n    <div id="InfoWIP">Work In Progress</div>\n</template>'},initscreen:{execTree:{context:0,closure:"",children:[{context:1,closure:'\n            var track = document.getElementById("trackAudio");\n            var startToggle = this.find("#start-toggle");\n            var progress = this.find(".progress");\n            var loading = this.find("img");\n            var loaded = false;\n            function sleep(ms) {\n                return new Promise(resolve => setTimeout(resolve, ms));\n            }\n\n            startToggle.onclick = async () => {\n                startToggle.style.display = "none";\n                await forceBuffer();\n                document.body.initPressed = true;\n                this.setState({\n                    screen: "Intro",\n                    prevScreen: null\n                });\n                track.play();\n                this.remove();\n            }\n\n            function is_touch_device() {\n    \n                var prefixes = \' -webkit- -moz- -o- -ms- \'.split(\' \');\n                \n                var mq = function (query) {\n                    return window.matchMedia(query).matches;\n                }\n            \n                if ((\'ontouchstart\' in window) || window.DocumentTouch && document instanceof DocumentTouch) {\n                    return true;\n                }\n            \n                // include the \'heartz\' as a way to have a non matching MQ to help terminate the join\n                // https://git.io/vznFH\n                var query = [\'(\', prefixes.join(\'touch-enabled),(\'), \'heartz\', \')\'].join(\'\');\n                return mq(query);\n            }\n\n            onLoaded = () => {\n                loaded = true;\n                loading.style.display = "none";\n                startToggle.style.display = "block";\n            }\n\n            forceBuffer = async () => {\n                var scenes = document.getElementsByTagName("video");\n                loading.style.display = "block";\n                for(let i = 0; i < scenes.length; i++){\n                    scenes[i].play();\n                }\n                await sleep(1000);\n                for(let i = 0; i < scenes.length; i++){\n                    scenes[i].pause();\n                    scenes[i].currentTime = 0;\n                }\n                await sleep(400);\n                loading.style.display = "none";\n            }\n\n            async function waitLoad(){\n                await sleep(1000);\n                var scenes = document.getElementsByTagName("video");\n                var checkReady = setInterval(async () => {\n                    var loaded = 0;\n                    for (let i = 0; i < scenes.length; i++){\n                        if (scenes[i].readyState == 4){\n                            loaded++;\n                        }\n                    }\n                    progress.innerText = `${loaded}/${scenes.length} loaded`;\n                    console.log(loaded, "loaded");\n                    if (loaded == scenes.length){\n                        console.log("ready");\n                        clearInterval(checkReady);\n                        onLoaded();\n                    }\n                }, 700);\n                setTimeout(() => {\n                    if(!loaded){\n                        clearInterval(checkReady);\n                        onLoaded();\n                    }\n                }, 8000);\n            }\n            if (is_touch_device()){\n                loading.style.display = "none";\n                progress.innerText = "Touch device not supported";\n                progress.style["font-size"] = "64px";\n            }else{\n                waitLoad();\n            }\n        ',children:[{context:1,closure:"",children:[]},{context:3,closure:"",children:[]},{context:5,closure:"",children:[{context:1,closure:"",children:[]}]}]}]},srcBuffer:'<template>\n    <div id="InitScreen">\n        \n        <img class="center-in" src="assets/InitLoading.gif" height="60">\n        <span class="center-in progress">0/17 loaded</span>\n        <div id="start-toggle" class="center-in">\n            <span>Start</span>\n        </div>\n    </div>\n</template>'},introscreen:{execTree:{context:0,closure:"",children:[{context:1,closure:'\n      this.screenName = "Intro";\n      this.userPressed = false;\n      this.bindState(state => {\n        if (state.screen != this.screenName)\n          return\n        this.style.opacity = 1;\n        this.play();\n      })\n      this.onended = function() {\n        console.log("init onend");\n        if (!document.body.initPressed){\n          return;\n        }\n        document.body.find(".loading").remove();\n        this.setState({screen: this.userPressed ? "MenuNewGame" : "AwaitButton", prevScreen: document.body.state.screen});\n        setTimeout(() => {\n          this.remove();\n        }, this.userPressed ? 500 : 0);\n      }\n    ',children:[{context:1,closure:"",children:[]}]}]},srcBuffer:'<template>\n  <video muted class="screen screen-intro Intro">\n    \n    <source src="assets/Intro.mp4" type="video/mp4">\n  </video>\n</template>'},loadcard:{execTree:{context:0,closure:"",children:[{context:1,closure:"",children:[{context:1,closure:"",children:[]},{context:3,closure:"",children:[{context:1,closure:"",children:[]}]}]}]},srcBuffer:'<template>\n    <div class="LoadCard">\n        <img src="assets/sprites/loadgame_card.png">\n        <div class="numero">\n            <span>No.1</span>\n        </div>\n    </div>\n</template>'},loadcontainer:{execTree:{context:0,closure:"",children:[{context:1,closure:'\n            this.imports = ["LoadCard"];\n\n            var hoverSound = document.getElementById("hoverAudio");\n            var selectSound = document.getElementById("selectAudio");\n            this.onFullLoad = () => {\n                var cards = this.getElementsByClassName("LoadCard");\n                for (let i = 0; i < cards.length; i++){\n                    var index = cards.length - (i + 1);\n                    var c = cards[index];\n                    c.style.right = `-${(i*50)}px`;\n                    c.style.top = `${(i*40) - 300}px`;\n                    c.find(".numero").innerText = "No."+(i+1);\n                    var setEvent = (card, index) => {\n                        card.onmouseenter = () => {\n                            var offsetRight = parseInt(card.style.right.split("px")[0]);\n                            var img = card.find("img");\n                            img.src = "assets/sprites/loadgame_card_hover.png";\n                            for (let j = index; j >= 0; j--){\n                                cards[j].style.top = cards[j].offsetTop + 100 + "px";\n                            }\n                            hoverSound.play();\n                            card.style.right = offsetRight + 100 + "px";\n                        }\n                        card.onmouseleave = () => {\n                            var offsetRight = parseInt(card.style.right.split("px")[0]);\n                            var img = card.find("img");\n                            img.src = "assets/sprites/loadgame_card.png";\n                            for (let j = index; j >= 0; j--){\n                                cards[j].style.top = cards[j].offsetTop - 100 + "px";\n                            }\n                            card.style.right = offsetRight - 100 + "px";\n                        }\n                        card.onclick = () => {\n                            selectSound.play();\n                        }\n                    }\n                    setEvent(c, index);\n                }\n            }\n            this.bindState(state => {\n                if (state.screen != "MenuLoadGame"){\n                    if (this.className != "load-slide-out"){\n                        this.className = "load-slide-out";\n                    }\n                    return;\n                }\n                this.className = "load-slide-in";\n            })\n        ',children:[{context:1,closure:"",children:[{context:1,closure:"",children:[]}]},{context:3,closure:"",children:[]},{context:5,closure:"",children:[]},{context:7,closure:"",children:[]},{context:9,closure:"",children:[]},{context:11,closure:"",children:[]},{context:13,closure:"",children:[]}]}]},srcBuffer:'<template>\n    <div id="LoadContainer" class="load-slide-out">\n        \n        <div class="header">\n            <img src="assets/sprites/loadgame_header.png">\n        </div>\n        <loadcard></loadcard>\n        <loadcard></loadcard>\n        <loadcard></loadcard>\n        <loadcard></loadcard>\n        <loadcard></loadcard>\n        <loadcard></loadcard>\n    </div>\n</template>'},menuconfigscreen:{execTree:{context:0,closure:"",children:[{context:1,closure:'\n      this.screenName = "MenuConfig";\n      this.translateMap = {\n        "MenuNewGame": this.parentElement.find(".MenuConfigT-1"),\n        "MenuNewGame2": this.parentElement.find(".MenuConfigT-1B"),\n        "MenuLoadGame": this.parentElement.find(".MenuConfigT-2"),\n        "MenuLoadGame2": this.parentElement.find(".MenuConfigT-2B")\n      };\n      var body = document.body;\n      var prevScreen = null;\n      var configFlag = false;\n      for (const screen in this.translateMap){\n        let trScreen = this.translateMap[screen];\n        trScreen.onended = () => {\n          if (!document.body.initPressed){\n            return;\n          }\n          if (this.paused){\n            this.play();\n          }\n          this.style["z-index"] = 1;\n          trScreen.style["z-index"] = 0;\n          trScreen.load();\n          body.inTransition = false;\n          body.spinner.style.opacity = 0;\n        };\n      }\n      this.bindState(state => {\n        if (state.screen != this.screenName){\n          /*if (!this.paused){\n            this.pause();\n          }*/\n          this.style["z-index"] = 0;\n          return\n        }\n        body.inTransition = true;\n        prevScreen = document.body.find("." + state.prevScreen);\n        var configPressed = document.body.configPressed;\n        var translate = this.translateMap[state.prevScreen + (configPressed ? "2" : "")];\n        document.body.configPressed = true;\n        \n        if (prevScreen){\n          prevScreen.style["z-index"] = 0;\n        }\n        translate.play();\n        translate.style["z-index"] = 1;\n      });\n    ',children:[{context:1,closure:"",children:[]}]},{context:3,closure:"",children:[{context:1,closure:"",children:[]}]},{context:5,closure:"",children:[{context:1,closure:"",children:[]}]},{context:7,closure:"",children:[{context:1,closure:"",children:[]}]},{context:9,closure:"",children:[{context:1,closure:"",children:[]}]}]},srcBuffer:'<template>\n  <video muted loop class="screen MenuConfig">\n    \n    <source src="assets/MenuConfig2.mp4" type="video/mp4">\n  </video>\n  <video muted class="screen MenuConfigT-1">\n    <source src="assets/MenuConfig.mp4" type="video/mp4">\n  </video>\n  <video muted class="screen MenuConfigT-1B">\n    <source src="assets/MenuConfig4.mp4" type="video/mp4">\n  </video>\n  <video muted class="screen MenuConfigT-2">\n    <source src="assets/MenuConfig5.mp4" type="video/mp4">\n  </video>\n  <video muted class="screen MenuConfigT-2B">\n    <source src="assets/MenuConfig3.mp4" type="video/mp4">\n  </video>\n</template>'},menugamescreen:{execTree:{context:0,closure:"",children:[{context:1,closure:'\n      this.screenName = "MenuNewGame";\n      this.sceneB = "assets/MenuNewGame4.mp4"\n      this.translateMap = {\n        "AwaitButton": this.parentElement.find(".MenuNewGameT-1"),\n        "Intro": this.parentElement.find(".MenuNewGameT-1"),\n        "MenuConfig": this.parentElement.find(".MenuNewGameT-2"),\n        "MenuLoadGame": this.parentElement.find(".MenuNewGameT-3"),\n        "MenuLoadGame2": this.parentElement.find(".MenuNewGameT-3B")\n      };\n      var body = document.body;\n      var prevScreen = null;\n      for (const screen in this.translateMap){\n        let trScreen = this.translateMap[screen];\n        trScreen.onended = () => {\n          if (!document.body.initPressed){\n            return;\n          }\n          if (this.paused){\n            this.play();\n          }\n          this.style["z-index"] = 1;\n          trScreen.style["z-index"] = 0;\n          trScreen.load();\n          body.spinner.style.opacity = 0;\n          body.inTransition = false;\n        };\n      }\n      this.bindState(state => {\n        if (state.screen != this.screenName){\n          /*if (!this.paused){\n            this.pause();\n          }*/\n          this.style["z-index"] = 0;\n          return\n        }\n        document.body.find(".loading-menu").style.opacity = 1;\n        body.inTransition = true;\n        prevScreen = document.body.find("." + state.prevScreen);\n        var configPressed = document.body.configPressed;\n        var translate = this.translateMap[state.prevScreen];\n        if (state.prevScreen == "MenuLoadGame" && configPressed){\n          translate = this.translateMap[state.prevScreen+"2"];\n        }\n        if (configPressed && this.src != this.sceneB){\n          this.src = this.sceneB;\n          this.load();\n        }\n        if (prevScreen){\n          prevScreen.style["z-index"] = 0;\n        }\n        translate.play();\n        translate.style["z-index"] = 1;\n      });\n    ',children:[{context:1,closure:"",children:[]}]},{context:3,closure:"",children:[{context:1,closure:"",children:[]}]},{context:5,closure:"",children:[{context:1,closure:"",children:[]}]},{context:7,closure:"",children:[{context:1,closure:"",children:[]}]},{context:9,closure:"",children:[{context:1,closure:"",children:[]}]}]},srcBuffer:'<template>\n  <video muted loop class="screen MenuNewGame">\n    \n    <source src="assets/MenuNewGame.mp4" type="video/mp4">\n  </video>\n  <video muted class="screen MenuNewGameT-1">\n    <source src="assets/MenuTransition.mp4" type="video/mp4">\n  </video>\n  <video muted class="screen MenuNewGameT-2">\n    <source src="assets/MenuTNewGame.mp4" type="video/mp4">\n  </video>\n  <video muted class="screen MenuNewGameT-3">\n    <source src="assets/MenuNewGame3.mp4" type="video/mp4">\n  </video>\n  <video muted class="screen MenuNewGameT-3B">\n    <source src="assets/MenuNewGame2.mp4" type="video/mp4">\n  </video>\n</template>'},menuloadscreen:{execTree:{context:0,closure:"",children:[{context:1,closure:'\n      this.screenName = "MenuLoadGame";\n      this.sceneB = "assets/MenuLoad3.mp4"\n      this.translateMap = {\n        "MenuNewGame": this.parentElement.find(".MenuLoadGameT-1"),\n        "MenuNewGame2": this.parentElement.find(".MenuLoadGameT-1B"),\n        "MenuConfig": this.parentElement.find(".MenuLoadGameT-2"),\n        "MenuConfig2": this.parentElement.find(".MenuLoadGameT-2B")\n      };\n      var prevScreen = null;\n      var body = document.body;\n      for (const screen in this.translateMap){\n        let trScreen = this.translateMap[screen];\n        trScreen.onended = () => {\n          if (!document.body.initPressed){\n            return;\n          }\n          if (this.paused){\n            this.play();\n          }\n          this.style["z-index"] = 1;\n          trScreen.style["z-index"] = 0;\n          trScreen.load();\n          body.spinner.style.opacity = 0;\n          body.inTransition = false;\n        };\n      }\n      this.bindState(state => {\n        if (state.screen != this.screenName){\n          /*if (!this.paused){\n            this.pause();\n          }*/\n          this.style["z-index"] = 0;\n          return\n        }\n        body.inTransition = true;\n        prevScreen = document.body.find("." + state.prevScreen);\n        var configPressed = document.body.configPressed;\n        var translate = this.translateMap[state.prevScreen + (configPressed ? "2" : "")];\n        if (configPressed && this.src != this.sceneB){\n          this.src = this.sceneB;\n          this.load();\n        }\n        if (prevScreen){\n          prevScreen.style["z-index"] = 0;\n        }\n        translate.play();\n        translate.style["z-index"] = 1;\n      });\n    ',children:[{context:1,closure:"",children:[]}]},{context:3,closure:"",children:[{context:1,closure:"",children:[]}]},{context:5,closure:"",children:[{context:1,closure:"",children:[]}]},{context:7,closure:"",children:[{context:1,closure:"",children:[]}]},{context:9,closure:"",children:[{context:1,closure:"",children:[]}]}]},srcBuffer:'<template>\n  <video muted loop class="screen MenuLoadGame">\n    \n    <source src="assets/MenuLoad4.mp4" type="video/mp4">\n  </video>\n  <video muted class="screen MenuLoadGameT-1">\n    <source src="assets/MenuLoad5.mp4" type="video/mp4">\n  </video>\n  <video muted class="screen MenuLoadGameT-1B">\n    <source src="assets/MenuLoad.mp4" type="video/mp4">\n  </video>\n  <video muted class="screen MenuLoadGameT-2">\n    <source src="assets/MenuLoad2.mp4" type="video/mp4">\n  </video>\n  <video muted class="screen MenuLoadGameT-2B">\n    <source src="assets/MenuLoad6.mp4" type="video/mp4">\n  </video>\n</template>'},textsprite:{execTree:{context:0,closure:"",children:[{context:1,closure:'\n            var hoverSound = document.getElementById("hoverAudio");\n            var selectSound = document.getElementById("selectAudio");\n            var body = document.body;\n            var canvas = this.parentElement;\n            var usableScreens = this.props.screens.split(" ");\n            this.usable = false;\n            var img = this.find("img");\n            img.src = this.props.src;\n            this.bindState((state) => {\n                this.usable = usableScreens.indexOf(state.screen) != -1;\n            })\n            if (this.props.subclass){\n                this.props.subclass.split(" ").forEach(cl => {\n                    this.classList.add(cl);\n                })\n            }\n            this.addEventListener("mouseenter", () => {\n                if (!this.usable || body.inTransition) return;\n                this.style.cursor = "pointer";\n                hoverSound.play();\n                this.style.opacity = 1;\n            });\n            this.addEventListener("mouseleave", () => {\n                if (!this.usable || body.inTransition) return;\n                this.style.cursor = "auto";\n                this.style.opacity = 0;\n            });\n            this.addEventListener("click", () => {\n                if (!this.usable || body.inTransition) return;\n                this.style.cursor = "auto";\n                selectSound.play();\n            });\n        ',children:[{context:1,closure:"",children:[]}]}]},srcBuffer:'<template>\n    <div class="sprite text-sprite">\n        \n        <img height="100%">\n    </div>\n</template>'}};const execTree={context:"document.body",closure:'\n            this.state = {\n                screen: "Init",\n                prevScreen: null\n            };\n            this.inTransition = false;\n            this.imports = ["InitScreen",\n                            "IntroScreen", \n                            "AwaitScreen",\n                            "MenuLoadScreen",\n                            "MenuGameScreen",\n                            "MenuConfigScreen",\n                            "CanvaScreen",\n                            "InfoBar"];\n\n        ',children:[{context:1,closure:"",children:[{context:1,closure:"",children:[]}]},{context:3,closure:"",children:[{context:1,closure:"",children:[]}]},{context:5,closure:"\n                this.volume = 0.3;\n            ",children:[{context:1,closure:"",children:[]}]},{context:7,closure:"",children:[]},{context:9,closure:"",children:[]},{context:11,closure:"",children:[]},{context:13,closure:"",children:[]},{context:15,closure:"",children:[]},{context:17,closure:"",children:[]},{context:19,closure:"",children:[]},{context:21,closure:"",children:[]}]};uni._evalExecTree(execTree,document.body);