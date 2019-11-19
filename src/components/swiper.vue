<template>
  <div id="wrapper">
   <p id="stage">  

    <ul id="container" :style="{transform: 'rotateY('+deg+'deg)'}">  

        <li>  

            <img src="@/assets/img/whlb1.png"/>  

        </li>  

        <li>  

            <img src="@/assets/img/whlb2.png"/>

        </li>  

        <li>  

            <img src="@/assets/img/whlb3.png"/> 

        </li>  

        <li>  

            <img src="@/assets/img/whlb2.png"/> 

        </li>  

        <li>  

            <img src="@/assets/img/whlb1.png"/> 

        </li>  

        <li>  

            <img src="@/assets/img/whlb3.png"/>

        </li>  

        <li>  

            <img src="@/assets/img/whlb1.png"/>

        </li>  

        <li>  

            <img src="@/assets/img/whlb2.png"/> 

        </li>  

        <li>  

            <img src="@/assets/img/whlb1.png"/> 
        </li>  

    </ul>  

</p>  
  </div>
</template>

<script>
export default {
data() {
return {
deg: 40
}
},
created() {

},
mounted() {
setInterval(() => {
this.deg = this.deg + 40
},1000)
}
}
</script>
<style scoped lang='scss'>
li  

{  

    width: 128px;  

    box-shadow: 0 1px 3px rgba(0, 0, 0, .5);  

    position: absolute;  

    bottom: 0;  

}  

   

li img  

{  

    width: 128px;  
    height: 100px;

    box-shadow: 0 1px 3px rgba(0, 0, 0, .5);  

    vertical-align: middle;  

}  

   

li span  

{  

    display: block;  

    width: 128px;  

    text-align: center;  

    color: #333;  

    font-size: 8px;  

}  

   

#stage  

{  

   

    width: 900px;  

    min-height: 100px;  

    margin-left: auto;  

    margin-right: auto;  

    padding: 100px 50px;  

    -webkit-perspective: 1200px;  

    position: relative;  

}  

   

#container  

{  

    // background: url("@/assets/img/whlb1.png") no-repeat 0 0;  
    // transform: rotateX(10deg);

    margin-top: 200px;  

    width: 128px;  

    box-shadow: 0 1px 3px rgba(0, 0, 0, .5);  

    height: 100px;  

    // margin-left: -64px;  

    -webkit-transition: -webkit-transform 1s;  

    transition: transform 1s;  

    -webkit-transform-style: preserve-3d;  

    position: absolute;  

    left: 50%;  

}  

   

li:nth-child(0)  

{  

    -webkit-transform: rotateY(0deg) translateZ(200px) ;  

}  

   

li:nth-child(1)  

{  

    -webkit-transform: rotateY(40deg) translateZ(200px);  

}  

   

li:nth-child(2)  

{  

    -webkit-transform: rotateY(80deg) translateZ(200px);  

}  

   

li:nth-child(3)  

{  

    -webkit-transform: rotateY(120deg) translateZ(200px);  

}  

   

li:nth-child(4)  

{  

    -webkit-transform: rotateY(160deg) translateZ(200px);  

}  

   

li:nth-child(5)  

{  

    -webkit-transform: rotateY(200deg) translateZ(200px);  

}  

   

li:nth-child(6)  

{  

    -webkit-transform: rotateY(240deg) translateZ(200px);  

}  

   

li:nth-child(7)  

{  

    -webkit-transform: rotateY(280deg) translateZ(200px);  

}  

   

li:nth-child(8)  

{  

    -webkit-transform: rotateY(320deg) translateZ(200px);  

}  

   

li:nth-child(9)  

{  

    -webkit-transform: rotateY(360deg) translateZ(200px);  

}
</style>