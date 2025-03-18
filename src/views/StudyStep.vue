<template>
  <div class="container">
    <h1>📩</h1>
    <h1>Learning Step</h1>
    <p>自我感动没有用，大家都是以结果为导向得人</p>
    <hr id="top-hr"/>
    <h3>本周写博客了吗</h3>
    <div id="blog_heatmap" class="heatmap"></div>
    <h3>今天练字了吗</h3>
    <div id="pc_heatmap" class="heatmap"></div>
    <h3>今天做题了吗</h3>
    <div id="arithmetic_heatmap" class="heatmap"></div>
    <hr id="top-hr"/>
  </div>
</template>

<script>
export default {
  name: 'StudyStep',
  components: {
    // AppCard,
  },
  data() {
    return {}
  },
  methods: {
    blog_render() {
      var data = [
        { column1: '2023-01-01', column2: 3 },
        { column1: '2023-01-01', column2: 3 },
        { column1: '2023-01-02', column2: 3 },
      ];
      // eslint-disable-next-line no-undef
      const cal = new CalHeatmap();
      cal.paint({
        data: {
          source: data,
          x: 'column1',
          y: 'column2',
          groupY: 'sum',
        },
        itemSelector: '#blog_heatmap',
        date: {start: new Date(2023, 0, 15)},
        domain: {
          type: 'month'
        },
        subDomain: {
          type: 'week',
        },
      });
    },
    pc_render() {
      var data = [
        { column1: '2023-01-01', column2: 3 },
        { column1: '2023-01-01', column2: 3 },
        { column1: '2023-01-02', column2: 3 },
      ];
      // eslint-disable-next-line no-undef
      const cal = new CalHeatmap();
      cal.paint({
        data: {
          source: data,
          x: 'column1',
          y: 'column2',
          groupY: 'sum',
        },
        itemSelector: '#pc_heatmap',
        date: {start: new Date(2023, 0, 15)},
        domain: {
          type: 'month'
        },
        subDomain: {
          type: 'day'
        },
      });
    },
    arithmetic_render() {
      // eslint-disable-next-line no-undef
      const cal = new CalHeatmap();
      cal.paint({
        itemSelector: '#arithmetic_heatmap',
        date: {start: new Date(2023, 0, 15)},
        domain: {type: 'month'},
        subDomain: {type: 'day'},
      });
    },
  },
  created() {
    this.blog_render()
    this.pc_render()
    this.arithmetic_render()
  },
}
</script>

<style>
.cal-heatmap-container {
  display: inline !important;
}
</style>
<style lang="css" scoped>
.container {
  padding: 0;
  width: 100% !important;
  max-width: 100% !important;
}

.heatmap {
  width: auto !important;
}
</style>
