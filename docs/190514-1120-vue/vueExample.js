// https://github.com/TonyGermaneri/canvas-datagrid/blob/master/tutorials/vueExample.js
Vue.config.ignoredElements = ['canvas-datagrid'];
new Vue({
    el: '#app',
    data: {
        grid: {
            data: [ { '': '' } ],
          },
          grid2: {
            data: [ { '': '' } ],
          },
    },
    methods: {
        createGridData: function (x_max, y_max) {
            var data = new Array(x_max);
            for (let x = 0; x < x_max; x++) {
                data[x] = new Object();
                for (let y = 0; y < y_max; y++) {
                    data[x][y] = '';
                }
            }
            return data;
        },
        initGrid: function() {
            // left one
            this.grid = canvasDatagrid({
                parentNode: document.getElementById('parent_grid'),
                columnHeaderClickBehavior: 'select',  // suppress sort
                debug: false,
            });
            this.grid.data = this.createGridData(10, 10);
            this.grid.style.height = "400px";
            //this.grid.scrollHeight = "200px";
            this.grid.style.width  = "560px";
            // right one
            this.grid2 = canvasDatagrid({
                parentNode: document.getElementById('parent_grid2'),
                columnHeaderClickBehavior: 'select'  // suppress sort
            });
            this.grid2.data = this.createGridData(25, 8);
            this.grid2.style.height = "400px";
            this.grid2.style.width  = "560px";
        }
    },
    created: function() {
        console.log("created, start.");
        console.log("created, done.");
    },
    beforeMount: function() {
        console.log("mounted, start.");
        console.log("mounted, done.");
    },
    mounted: function() {
        console.log("mounted, start.");
        this.initGrid();
//        this.grid.resize();
//        this.grid2.resize();
    }
});
