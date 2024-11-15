export interface IItem {
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  newest_published_date: string;
  oldest_published_date: string;
}

export interface IParams {
  id: string;
}

export interface IResults {
  list_name: string;
  books: Book[];
}

export interface Book {
  primary_isbn10: string;
  title: string;
  book_image: string;
  author: string;
  amazon_product_url: string;
}
