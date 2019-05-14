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
                columnHeaderClickBehavior: 'select',  // sortやめる
                debug: false,
            });
            this.grid.data = this.createGridData(10, 10);
            this.grid.style.height = "400px";
            //this.grid.scrollHeight = "200px";
            this.grid.style.width  = "580px";
            // right one
            this.grid2 = canvasDatagrid({
                parentNode: document.getElementById('parent_grid2'),
                columnHeaderClickBehavior: 'select'  // suppress sort
            });
            this.grid2.data = this.createGridData(25, 8);
            this.grid2.style.height = "400px";
            this.grid2.style.width  = "580px";
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
        this.grid.height='400px';
        this.grid.style.height='400px';
//        this.grid2.height='400px';
//        this.grid2.style.height='400px';
//        this.grid.draw();
//        this.grid2.draw();
        console.log('grid(1) scroll color ' + this.grid.style.debugScrollHeightColor);
        console.log('grid(1) height       ' + this.grid.height);
        console.log('grid(1) height       ' + this.grid.style.height);
        console.log('grid(1) scrollHeight ' + this.grid.scrollHeight);
        console.log('grid(2) scroll color ' + this.grid2.style.debugScrollHeightColor);
        console.log('grid(2) height       ' + this.grid2.height);
        console.log('grid(2) height       ' + this.grid2.style.height);
        console.log('grid(2) scrollHeight ' + this.grid2.scrollHeight);
        console.log('grid(2) border width ' + this.grid2.scrollBarBorderWidth);
        console.log("mounted, done.");
    }
});
