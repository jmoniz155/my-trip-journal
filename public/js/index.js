console.log("weow")

class PhotoGallery{
    constructor(){
      this.tripName = document.querySelector("#tripname").innerHTML.trim()
      this.API_KEY="563492ad6f917000010000014087bf308d61417fada3aa20de53ca31"
      this.galleryDIv = document.querySelector('.gallery');
      this.searchForm = document.querySelector('.container form');
      this.loadMore = document.querySelector('.load-more');
    //   this.logo = document.querySelector('.logo')
      this.pageIndex = 1;
      this.searchValueGlobal = '';
      this.eventHandle();
    
      console.log(this.tripName)
    }
    
    eventHandle(){
      // this.searchForm.addEventListener('submit', (e)=>{
        this.pageIndex = 1;
        this.getSearchedImages();
      // });
      
    }
    
    async fetchImages(baseURL){
      const response = await fetch(baseURL, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: this.API_KEY
        }
      });
      const data = await response.json();
      console.log(data);
      return data;
    }
    GenerateHTML(photos){
      photos.forEach(photo=>{
        const item= document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
        <img src="${photo.src.medium}" class="w-100">
        <p>Photo by: ${photo.photographer}</p>
        </a>
        `;
        this.galleryDIv.appendChild(item)
       
      })
    }
    async getSearchedImages(){
      this.loadMore.setAttribute('data-img', 'search');
      // e.preventDefault();
      this.galleryDIv.innerHTML='';
      // const searchValue = e.target.querySelector('input').value;
      const searchValue = this.tripName;
      this.searchValueGlobal = searchValue;
      const baseURL = `https://api.pexels.com/v1/search?query=${searchValue}&orientation=landscape&page=1&per_page=1`
      const data = await this.fetchImages(baseURL);
      this.GenerateHTML(data.photos);
      console.log(searchValue)
      
    }
  }
  
  // eslint-disable-next-line no-unused-vars
  const gallery = new PhotoGallery;
  
