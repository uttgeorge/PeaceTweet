var echart_lines = echarts.init(document.getElementById('emt-line'),'dark');
var echart_lines_option = {

     legend: {
         bottom: 10,
         left: 'center',
         data: ['Angry', 'Fear', 'Joy', 'Love', 'Sadness', 'Surprise']
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'cross'
         }
     },

     xAxis: [{
             gridIndex: 0,
             show: false,
             type: 'category',
             boundaryGap: false,
             data: []//['2017年2季度', '2017年3季度', '2017年4季度', '2018年1季度', '2018年2季度', '2018年3季度', '2018年4季度', '2019年1季度', '2019年2季度', '2019年3季度', '2019年4季度', '2020年1季度']
         },
         {
             gridIndex: 1,
             show: false,
             type: 'category',
             boundaryGap: false,
             data: []//['2017年2季度', '2017年3季度', '2017年4季度', '2018年1季度', '2018年2季度', '2018年3季度', '2018年4季度', '2019年1季度', '2019年2季度', '2019年3季度', '2019年4季度', '2020年1季度']
         },
         {
             gridIndex: 2,
             show: false,
             type: 'category',
             boundaryGap: false,
             data: []//['2017年2季度', '2017年3季度', '2017年4季度', '2018年1季度', '2018年2季度', '2018年3季度', '2018年4季度', '2019年1季度', '2019年2季度', '2019年3季度', '2019年4季度', '2020年1季度']
         },
         {
             gridIndex: 3,
             show: false,
             type: 'category',
             boundaryGap: false,
             data: []//['2017年2季度', '2017年3季度', '2017年4季度', '2018年1季度', '2018年2季度', '2018年3季度', '2018年4季度', '2019年1季度', '2019年2季度', '2019年3季度', '2019年4季度', '2020年1季度']
         },
         {
             gridIndex: 4,
             show: false,
             type: 'category',
             boundaryGap: false,
             data: []//['2017年2季度', '2017年3季度', '2017年4季度', '2018年1季度', '2018年2季度', '2018年3季度', '2018年4季度', '2019年1季度', '2019年2季度', '2019年3季度', '2019年4季度', '2020年1季度']
         },
         {
             gridIndex: 5,
             type: 'category',
             boundaryGap: false,
             data: []//['2017年2季度', '2017年3季度', '2017年4季度', '2018年1季度', '2018年2季度', '2018年3季度', '2018年4季度', '2019年1季度', '2019年2季度', '2019年3季度', '2019年4季度', '2020年1季度']
         }
     ],
     yAxis: [{
             gridIndex: 0,
             axisLabel: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             splitNumber: 1,
             name: 'Angry',
             nameLocation: 'center',
             nameRotate: 360

         },
         {
             gridIndex: 1,
             axisLabel: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             splitNumber: 1,
             name: 'Fear',
             nameLocation: 'center',
             nameRotate: 360
         },
         {
             gridIndex: 2,
             axisLabel: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             splitNumber: 1,
             name: 'Joy',
             nameLocation: 'center',
             nameRotate: 360
         },
         {
             gridIndex: 3,
             axisLabel: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             splitNumber: 1,
             name: 'Love',
             nameLocation: 'center',
             nameRotate: 360
         },
         {
             gridIndex: 4,
             axisLabel: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             splitNumber: 1,
             name: 'Sadness',
             nameLocation: 'center',
             nameRotate: 360
         },
         {
             gridIndex: 5,
             axisLabel: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             splitNumber: 1,
             name: 'Suprise',
             nameLocation: 'center',
             nameRotate: 360
         }
     ],
     grid: [{
             top: '13%',
             height: '13%'
         },
         {
             top: '26%',
             height: '13%'
         },
         {
             top: '39%',
             height: '13%'
         },
         {
             top: '52%',
             height: '13%'
         },
         {
             top: '65%',
             height: '13%'
         },
         {
             top: '78%',
             height: '13%'
         }
     ],
     series: [{
             type: 'line',
             name: 'Trump',
             data: [0, 41.1, 30.4, 65.1, 53.3, 53.3, 53.3, 41.1, 30.4, 65.1, 53.3, 0],
             xAxisIndex: 0,
             yAxisIndex: 0,
             smooth: true,
             lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#57BD9F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#19BC8C' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
             itemStyle: {
                normal: {
                    color: '#57BD9F',
                    borderWidth: 10,
                    borderColor: "#57BD9F"
                }
            }
         },
         {
             type: 'line',
             name: 'Biden',
             data: [0, 1, 2, 65.1, 53.3, 53.3, 53.3, 41.1, 30.4, 65.1, 53.3, 0],
             xAxisIndex: 0,
             yAxisIndex: 0,
             smooth: true,
             lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#57BD9F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#19BC8C' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
             itemStyle: {
                normal: {
                    color: '#57BD9F',
                    borderWidth: 10,
                    borderColor: "#57BD9F"
                }
            },
         },
         {
             type: 'line',
             name: 'Trump',
             data: [0, 74.1, 67.2, 79.5, 46.4, 46.4, 46.4, 74.1, 67.2, 79.5, 46.4, 0],
             xAxisIndex: 1,
             yAxisIndex: 1,
             smooth: true,
             lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#57BD9F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#19BC8C' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
             itemStyle: {
                normal: {
                    color: '#57BD9F',
                    borderWidth: 10,
                    borderColor: "#57BD9F"
                }
            }
         },
         {
             type: 'line',
             name: 'Biden',
             data: [0, 74.1, 67.2, 79.5, 46.4, 46.4, 46.4, 74.1, 67.2, 79.5, 46.4, 0],
             xAxisIndex: 1,
             yAxisIndex: 1,
             smooth: true,
             lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#57BD9F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#19BC8C' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
             itemStyle: {
                normal: {
                    color: '#57BD9F',
                    borderWidth: 10,
                    borderColor: "#57BD9F"
                }
            }
         },
         {
             type: 'line',
             name: 'Trump',
             data: [0, 24.1, 7.2, 15.5, 42.4, 42.4, 42.4, 24.1, 7.2, 15.5, 42.4, 0],
             xAxisIndex: 2,
             yAxisIndex: 2,
             smooth: true,
             lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#57BD9F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#19BC8C' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
             itemStyle: {
                normal: {
                    color: '#57BD9F',
                    borderWidth: 10,
                    borderColor: "#57BD9F"
                }
            }
         },
         {
             type: 'line',
             name: 'Biden',
             data: [0, 24.1, 7.2, 15.5, 42.4, 42.4, 42.4, 24.1, 7.2, 15.5, 42.4, 0],
             xAxisIndex: 2,
             yAxisIndex: 2,
             smooth: true,
             lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#57BD9F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#19BC8C' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
             itemStyle: {
                normal: {
                    color: '#57BD9F',
                    borderWidth: 10,
                    borderColor: "#57BD9F"
                }
            }
         },
         {
             type: 'line',
             name: 'Trump',
             data: [0, 74.1, 67.2, 79.5, 46.4, 46.4, 46.4, 74.1, 67.2, 79.5, 46.4, 0],
             xAxisIndex: 3,
             yAxisIndex: 3,
             smooth: true,
             lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#57BD9F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#19BC8C' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
             itemStyle: {
                normal: {
                    color: '#57BD9F',
                    borderWidth: 10,
                    borderColor: "#57BD9F"
                }
            }
         },
         {
             type: 'line',
             name: 'Biden',
             data: [0, 74.1, 67.2, 79.5, 46.4, 46.4, 46.4, 74.1, 67.2, 79.5, 46.4, 0],
             xAxisIndex: 3,
             yAxisIndex: 3,
             smooth: true,
             lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#57BD9F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#19BC8C' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
             itemStyle: {
                normal: {
                    color: '#57BD9F',
                    borderWidth: 10,
                    borderColor: "#57BD9F"
                }
            }
         },
         {
             type: 'line',
             name: 'Trump',
             data: [0, 74.1, 67.2, 79.5, 46.4, 46.4, 46.4, 74.1, 67.2, 79.5, 46.4, 0],
             xAxisIndex: 4,
             yAxisIndex: 4,
             smooth: true,
             lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#57BD9F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#19BC8C' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
             itemStyle: {
                normal: {
                    color: '#57BD9F',
                    borderWidth: 10,
                    borderColor: "#57BD9F"
                }
            }
         },
         {
             type: 'line',
             name: 'Biden',
             data: [0, 74.1, 67.2, 79.5, 46.4, 46.4, 46.4, 74.1, 67.2, 79.5, 46.4, 0],
             xAxisIndex: 4,
             yAxisIndex: 4,
             smooth: true,
             lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#57BD9F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#19BC8C' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
             itemStyle: {
                normal: {
                    color: '#57BD9F',
                    borderWidth: 10,
                    borderColor: "#57BD9F"
                }
            }
         },
         {
             type: 'line',
             name: 'Trump',
             data: [0, 74.1, 67.2, 79.5, 46.4, 46.4, 46.4, 74.1, 67.2, 79.5, 46.4, 0],
             xAxisIndex: 5,
             yAxisIndex: 5,
             smooth: true,
             lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#57BD9F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#19BC8C' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
             itemStyle: {
                normal: {
                    color: '#57BD9F',
                    borderWidth: 10,
                    borderColor: "#57BD9F"
                }
            }
         },
         {
             type: 'line',
             name: 'Biden',
             data: [0, 74.1, 67.2, 79.5, 46.4, 46.4, 46.4, 74.1, 67.2, 79.5, 46.4, 0],
             xAxisIndex: 5,
             yAxisIndex: 5,
             smooth: true,
             lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#57BD9F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#19BC8C' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
             itemStyle: {
                normal: {
                    color: '#57BD9F',
                    borderWidth: 10,
                    borderColor: "#57BD9F"
                }
            }
         }
     ]
 };