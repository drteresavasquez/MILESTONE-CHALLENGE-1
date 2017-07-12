console.log("main.js");

let blogPosts = [];
blogPosts.push({
	title: "How to Find Inner Peace", 
	copy: "Lorem ipsum dolor sit amet, amet leo et tristique at pellentesque nibh, tempor wisi placerat elit phasellus et, nibh integer habitant magna, adipiscing in, dis libero diam quis elementum. Quam rem velit. Velit elit ad pellentesque, mi parturient, potenti pariatur hendrerit omnis quis, rhoncus augue cras morbi mi, at posuere mattis justo ut montes. Id sapien venenatis, blandit diam leo adipiscing lacinia sit tellus, nibh eget amet quisque rhoncus parturient euismod. Est fusce, in neque mi a odio et, vitae neque. Aliquam fusce. Non dolor, ligula ligula morbi mauris integer luctus, sodales fusce dui at wisi nec, a magna erat malesuada a, cursus non nunc duis porttitor ut arcu. Blandit diam quisque arcu erat, et venenatis posuere sit sed ut faucibus. Sed mi sit nam gravida, id neque sit erat commodo, ac felis non. Risus pellentesque molestie tempor erat ut eros, semper velit in proin nunc, dolor at eget est ac et, elit gravida. Sit malesuada amet.", 
	date: "Author: Dr. T | Published: 7/5/17"
});
blogPosts.push({
	title: "Live Like You Are Dying", 
	copy: "Lorem ipsum dolor sit amet, amet leo et tristique at pellentesque nibh, tempor wisi placerat elit phasellus et, nibh integer habitant magna, adipiscing in, dis libero diam quis elementum. Quam rem velit. Velit elit ad pellentesque, mi parturient, potenti pariatur hendrerit omnis quis, rhoncus augue cras morbi mi, at posuere mattis justo ut montes. Id sapien venenatis, blandit diam leo adipiscing lacinia sit tellus, nibh eget amet quisque rhoncus parturient euismod. Est fusce, in neque mi a odio et, vitae neque. Aliquam fusce. Non dolor, ligula ligula morbi mauris integer luctus, sodales fusce dui at wisi nec, a magna erat malesuada a, cursus non nunc duis porttitor ut arcu. Blandit diam quisque arcu erat, et venenatis posuere sit sed ut faucibus. Sed mi sit nam gravida, id neque sit erat commodo, ac felis non. Risus pellentesque molestie tempor erat ut eros, semper velit in proin nunc, dolor at eget est ac et, elit gravida. Sit malesuada amet.", 
	date: "Author: Dr. T | Published: 7/7/17"
});
blogPosts.push({
	title: "Searching for Peace Gives You Life", 
	copy: "Lorem ipsum dolor sit amet, amet leo et tristique at pellentesque nibh, tempor wisi placerat elit phasellus et, nibh integer habitant magna, adipiscing in, dis libero diam quis elementum. Quam rem velit. Velit elit ad pellentesque, mi parturient, potenti pariatur hendrerit omnis quis, rhoncus augue cras morbi mi, at posuere mattis justo ut montes. Id sapien venenatis, blandit diam leo adipiscing lacinia sit tellus, nibh eget amet quisque rhoncus parturient euismod. Est fusce, in neque mi a odio et, vitae neque. Aliquam fusce. Non dolor, ligula ligula morbi mauris integer luctus, sodales fusce dui at wisi nec, a magna erat malesuada a, cursus non nunc duis porttitor ut arcu. Blandit diam quisque arcu erat, et venenatis posuere sit sed ut faucibus. Sed mi sit nam gravida, id neque sit erat commodo, ac felis non. Risus pellentesque molestie tempor erat ut eros, semper velit in proin nunc, dolor at eget est ac et, elit gravida. Sit malesuada amet.", 
	date: "Author: Dr. T | Published: 7/11/17"
});
//console.log("blogPosts", blogPosts);

// //for each object in here...I want to list each item of each line/array
blogPosts.forEach(function(item){
	document.getElementById("blog").innerHTML += `<article><h3>${item.title}</h3><p>${item.copy}</p><h4>${item.date}</h4><hr></article>`;
	
});


