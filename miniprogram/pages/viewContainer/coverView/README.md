cover-image 和 image的区别：
1. cover-image直接默认占据整个屏幕的宽度，image则是根据图片实际尺寸来展示
2. cover-image直接支持根据宽度等比例缩放，而image不支持：添加属性mode="widthFix"
3. cover-image始终在可视页面的最上层，不会定位给遮挡，但是image会被遮挡