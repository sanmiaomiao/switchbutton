	
		 /**写在前面：
		     * switch插件基于jquery,使用时要引用相应的js
		     *   param: {
		     *      selector1:外部div选择器
		     *      selector2: 内部div选择器
		     *     
		     *  },
		     * 使用：
			 * 			var myswitch=new Switch('#outer','#circle');
						myswitch.init();
						$('#circle').click(function(){
							myswitch.change();
						});
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
			function Switch(selector1,selector2){
				this.oouter=$(selector1);
				this.ocircle=$(selector2)
			}
			Switch.prototype={
				constructor:Switch,
				init:function(){
					console.log('初始化')
					this.oouter.addClass('outer');
					this.ocircle.addClass('circle');
				},
				change:function(){
					if(this.ocircle[0].className==='circle'){
						this.ocircle[0].className='circle-active'
					}else{
						this.ocircle[0].className='circle'
					}
					if(this.oouter[0].className==='outer'){
						this.oouter[0].className='outer-active'
					}else{
						this.oouter[0].className='outer'
					}
					
				}
			}
			
		

		
		
		