//  https://www.codewars.com/kata/515bb423de843ea99400000a

// For this exercise you will be strengthening your page-fu mastery. 
// You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. 
// The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:


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