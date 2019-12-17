# switchbutton
一个简易切换状态的封装jquery插件
##只需把switch.js和switch.css下下来，在html中引入，然后按照下面指南使用即可，上面的index.html为一个实际使用插件的例子，可以模仿使用。

		 /**写在前面：
		     * switch插件基于jquery,使用时要引用相应的js
		     *   param: {
		     *      selector1:外部div选择器
		     *      selector2: 内部div选择器
			 * 		callback1:活跃时的回调函数，默认为：()=>console.log('调用了活跃时的回调函数')
			 * 		callback2:非活跃时的回调函数，默认为：()=>console.log('调用了非活跃时的回调函数')
			 * 
		     *     
		     *  },
		     * 使用：
			 * 	var active=function (){//活跃时的回调函数
					console.log('外部活跃时调用')
					}
				var unactive=function (){//非活跃时的回调函数
					console.log('外部非活跃时调用')
					}
				var myswitch=new Switch('#outer','#circle',active,unactive);
				myswitch.init();
				$('#circle').click(function(){
					myswitch.change();
				})
			*
			*html中引入：
			* 	<script src="jquery.js"></script>
				<script src="switch.js"></script>
				<link href="swicth.css" rel="stylesheet"/>
				
			body内部：
			 * 		<div class="control">
						<div id='outer'>
							<div id='circle'></div>
						</div>
					</div>
					注意外部必须包类名为control的div,通过控制此div的尺寸可以实现开关的大小缩放，如下：
					.control{
						width: 100px;
						height: 50px;
					}
			* 
		     */
