// // TODO: complete this object/class

// // The constructor takes in an array of items and a integer indicating how many
// // items fit within a single page
// function PaginationHelper(collection, itemsPerPage){

//     const length = collection.length
//     const numberOfPages = length/itemsPerPage

//         return {
//             // returns the number of items within the entire collection
//             itemCount: function() {
//                     return length
//             },

//             // returns the number of pages
//             pageCount: function() {
//                     return Math.ceil(numberOfPages)
                    
//             },

//             // returns the number of items on the current page. page_index is zero based.
//             // this method should return -1 for pageIndex values that are out of range
//             pageItemCount: function(pageIndex) {
//                     if(Math.abs(pageIndex) > numberOfPages) return -1;

//                     if(pageIndex === Math.floor(numberOfPages)){
//                         return length % itemsPerPage
//                     }else{
//                         return itemsPerPage
//                     }
                    
//             },

//             // determines what page an item is on. Zero based indexes
//             // this method should return -1 for itemIndex values that are out of range
//             pageIndex: function(itemIndex) {
//                 if(Math.abs(itemIndex) > length) return -1;

//                 return(Math.floor(itemIndex/itemsPerPage))    

//         }
//     }
// }

// var helper = PaginationHelper(['a','b','c','d','e','f'], 4)

// console.log( helper.itemCount(), helper.pageCount(), helper.pageItemCount(1), helper.pageIndex(50)    )




// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){

    this.length= collection.length
    this.itemsPerPage= itemsPerPage;
    this.numberOfPages = collection.length/itemsPerPage


  }
  
  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function() {
          
            return this.length
  }
  
  // returns the number of pages
  PaginationHelper.prototype.pageCount = function() {
    
            return Math.ceil(this.numberOfPages)
  }
  
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
                if(pageIndex > this.numberOfPages || pageIndex < 0) return -1;

                        if(pageIndex === Math.floor(this.numberOfPages)){
                            return this.length % this.itemsPerPage
                        }else{
                            return this.itemsPerPage
                        }
  }
  
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function(itemIndex) {
            if(itemIndex > this.length || itemIndex < 0 ) return -1;

            return(Math.floor(itemIndex/this.itemsPerPage))
    
  }









var helper = new PaginationHelper([], 10)

console.log( helper.itemCount(), helper.pageCount(), helper.pageItemCount(2), helper.pageIndex(0))