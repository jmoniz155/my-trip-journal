class PhotoGallery{
    constructor(){
      
      this.galleryDIv = document.querySelector('.gallery');
      this.searchForm = document.querySelector('.header form');
      this.loadMore = document.querySelector('.load-more');
    //   this.logo = document.querySelector('.logo')
      this.pageIndex = 1;
      this.searchValueGlobal = '';
      this.eventHandle();
    }
    eventHandle(){
      this.searchForm.addEventListener('submit', (e)=>{
        this.pageIndex = 1;
        this.getSearchedImages(e);
      });


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
        <a href='${photo.src.original}'>
          <img src="${photo.src.medium}">
          <h3>${photo.photographer}</h3>
        </a>
        `;
        this.galleryDIv.appendChild(item)
      })
    }
    async getSearchedImages(e){
      this.loadMore.setAttribute('data-img', 'search');
      e.preventDefault();
      this.galleryDIv.innerHTML='';
      const searchValue = e.target.querySelector('input').value;
      this.searchValueGlobal = searchValue;
      const baseURL = `https://api.pexels.com/v1/search?query=${searchValue}&orientation=landscape&page=1&per_page=1`
      const data = await this.fetchImages(baseURL);
      this.GenerateHTML(data.photos);
        console.log(searchValue)
    }
  }
  
  // eslint-disable-next-line no-unused-vars
  const gallery = new PhotoGallery;