
export const base_url = 'https://marget.azurewebsites.net/api/';
export const base_url_demo = 'https://iep.rasyotekdemo.com.tr/v1/mobile/';

//Sorgu çekilcek api nin 3 durumu vardır bu kısımda tanımlayabilirsin
export const PAYROLLS_START = 'company_persona_start';
export const PAYROLLS_SUCCESS = 'company_persona_success';
export const PAYROLLS_FAIL = 'company_persona_faild';

//Kategori çekilecek ok
export const CATEGORY_START = 'category_start';
export const CATEGORY_SUCCESS = 'category_success';
export const CATEGORY_FAIL = 'category_faild';

//user kayıt çekilecek  ok
export const USER_CREATE_START = 'user_create_start';
export const USER_CREATE_SUCCESS = 'user_create_success';
export const USER_CREATE_FAIL = 'user_create_faild';

//Anasayfa çekilecek
export const HOME_START = 'home_start';
export const HOME_SUCCESS = 'home_success';
export const HOME_FAIL = 'home_faild';

//Ürünler çekilecek ok 
export const PRODUCT_START = 'product_start';
export const PRODUCT_SUCCESS = 'product_success';
export const PRODUCT_FAIL = 'product_faild';

//Ürünler çekilecek ok 
export const PRODUCT_ADD_START = 'product_add_start';
export const PRODUCT_ADD_SUCCESS = 'product_add_success';
export const PRODUCT_ADD_FAIL = 'product_add_faild';

//Ürünler çekilecek
export const MARKET_START = 'market_start';
export const MARKET_SUCCESS = 'market_success';
export const MARKET_FAIL = 'market_faild';

//Favori Ürünler çekilecek
export const FAVORITE_CATEGORIES_START = 'favorite_categoties_start';
export const FAVORITE_CATEGORIES_SUCCESS = 'favorite_categoties_success';
export const FAVORITE_CATEGORIES_FAIL = 'favorite_categoties_faild';

//Favori Ürünler çekilecek
export const FAVORITE_MARKETS_START = 'favorite_market_start';
export const FAVORITE_MARKETS_SUCCESS = 'favorite_market_success';
export const FAVORITE_MARKETS_FAIL = 'favorite_market_faild';

//Favori Ürünler çekilecek
export const FAVORITE_PRODUCTS_START = 'favorite_products_start';
export const FAVORITE_PRODUCTS_SUCCESS = 'favorite_products_success';
export const FAVORITE_PRODUCTS_FAIL = 'favorite_products_faild';

//Favoriye eklenir
export const FAVORITE_POST_START = 'favorite_post_start';
export const FAVORITE_POST_SUCCESS = 'favorite_post_success';
export const FAVORITE_POST_FAIL = 'favorite_post_faild';


//firebase loading
export const FIREBASE_START = 'firebase_loading_start';
export const FIREBASE_SUCCESS = 'firebase_loading_success';
export const FIREBASE_FAIL = 'firebase_loading_fail';



// önemli olabilecek anektot denilebilecek değişkenler
export const AUTHORIZATION = 'Authorization has been denied for this request.';

// session için gerekli olan uygulama içi sürekli kullanılacak tanımlamalar
export const USERID = { data: '' };
export const USERNAME = { data: '' };
export const EMAIL = { data: '' };
export const TOKEN = { data: '' };
export const CATEGORYID = { data: '' };
export const MARKETID = { data: '' };
