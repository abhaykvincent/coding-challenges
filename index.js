maxArea = function(height) {
    let areas=[];
    for (var i = 0; i < height.length; i++) {
        areas.push(0)
        for (var j = i; j < height.length; j++) {
            let min = Math.min(height[i], height[j]);
            let area=min*(j-i)
            if(area>areas[i])
                areas[i]=area
        }
    }
    console.log(Math.max(...areas))
    return parseInt(Math.max(areas)) 
};
maxArea([1,8,6,2,5,4,8,3,7])
