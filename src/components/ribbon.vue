<template>
  <div class="ribbon">
    <span class="ribbon3" :class="type">{{title}}</span>
  </div>
</template>

<script>
  export default {
    name: "ribbon",
    props: ['title', 'type']
  }
</script>

<style scoped>
  .ribbon {
    display: inline-block;
    width: 100%;
    height: 50px;
    position: relative;
    float: left;
    margin-bottom: 10px;
    left: -15px;
    background-size: cover;
    text-transform: uppercase;
    color: white;
  }

  .ribbon:nth-child(even) {
    margin-right: 4%;
  }

  @media (max-width: 500px) {
    .ribbon {
      width: 100%
    }

    .ribbon:nth-child(even) {
      margin-right: 0%;
    }
  }

  .ribbon3 {
    display: inline-block;
    position: absolute;
    width: 80px;
    height: 28px;
    line-height: 28px;
    padding-left: 15px;

    left: -8px;
    top: 20px
  }

  .primary{
    background: #0e77ca;
  }
  .error{
    background: #f04134;;
  }

  .ribbon3:before, .ribbon3:after {
    content: "";
    position: absolute;
  }

  .ribbon3:before {
    height: 0;
    width: 0;

    border-left: 8px solid transparent;
    top: -8px;
    left: 0;
  }

  .ribbon3:after {
    height: 0;
    width: 0;
    border-top: 14px solid transparent;
    border-bottom: 14px solid transparent;
    right: -10px;
  }

  .primary:after{
    border-left: 10px solid #0e77ca;
  }
  .primary:before{
    border-bottom: 8px solid #093F6C;
  }
  .error:after{
    border-left: 10px solid #f04134;
  }
  .error:before{
    border-bottom: 8px solid #84231D;
  }
</style>
