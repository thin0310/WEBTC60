- Tạo 1 document là book trong collection buoi-4
- Import data từ file json manage-book.json vào (sử dụng mongo compass)
- Truy vấn search thông tin theo các đầu mục sau

1. Tìm toàn bộ quyển sách trong document book

```
query:
db.book.find({});
```

```
result:
{
  _id: ObjectId("63f27957e94648ca020e0efb"),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  publication_date: '1960-07-11',
  pages: 281,
  genres: [
    'Novel',
    'Fiction',
    'Literary'
  ],
  publisher: {
    name: 'J. B. Lippincott & Co.',
    location: 'Philadelphia, PA'
  }
}
{
  _id: ObjectId("63f27957e94648ca020e0efc"),
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  publication_date: '1813-01-28',
  pages: 279,
  genres: [
    'Novel',
    'Fiction',
    'Romance'
  ],
  publisher: {
    name: 'Thomas Egerton',
    location: 'London, UK'
  }
}
{
  _id: ObjectId("63f27957e94648ca020e0efd"),
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  publication_date: '1951-07-16',
  pages: 214,
  genres: [
    'Novel',
    'Fiction',
    'Bildungsroman'
  ],
  publisher: {
    name: 'Little, Brown and Company',
    location: 'Boston, MA'
  }
}
{
  _id: ObjectId("63f27957e94648ca020e0efe"),
  title: "The Hitchhiker's Guide to the Galaxy",
  author: 'Douglas Adams',
  publication_date: '1979-10-12',
  pages: 214,
  genres: [
    'Science fiction',
    'Comedy',
    'Adventure'
  ],
  publisher: {
    name: 'Pan Books',
    location: 'London, UK'
  }
}
{
  _id: ObjectId("63f27957e94648ca020e0eff"),
  title: 'One Hundred Years of Solitude',
  author: 'Gabriel García Márquez',
  publication_date: '1967-06-01',
  pages: 417,
  genres: [
    'Novel',
    'Magic realism'
  ],
  publisher: {
    name: 'Editorial Sudamericana',
    location: 'Buenos Aires, Argentina'
  }
}
{
  _id: ObjectId("63f27957e94648ca020e0f00"),
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  publication_date: '1954-07-29',
  pages: 1178,
  genres: [
    'Fantasy',
    'Adventure'
  ],
  publisher: {
    name: 'George Allen & Unwin',
    location: 'London, UK'
  }
}
{
  _id: ObjectId("63f27957e94648ca020e0f01"),
  title: 'The Diary of a Young Girl',
  author: 'Anne Frank',
  publication_date: '1947-06-25',
  pages: 267,
  genres: [
    'Autobiography',
    'Diary'
  ],
  publisher: {
    name: 'Contact Publishing',
    location: 'Amsterdam, Netherlands'
  }
}


```

2. Tìm 1 quyển sách theo _id
```
query:
db.book.findOne({_id: ObjectId("63f27957e94648ca020e0efb")});
```

```
result:
{
  _id: ObjectId("63f27957e94648ca020e0efb"),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  publication_date: '1960-07-11',
  pages: 281,
  genres: [
    'Novel',
    'Fiction',
    'Literary'
  ],
  publisher: {
    name: 'J. B. Lippincott & Co.',
    location: 'Philadelphia, PA'
  }
}


```
3. Thêm 1 quyển sách mới (insert toàn bộ thông tin)
```
query:
db.book.insertOne({
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publication_date": "1925-04-10",
  "pages": 180,
  "genres": ["Novel", "Fiction", "Literary"],
  "publisher": {
    "name": "Charles Scribner's Sons",
    "location": "New York, NY"
  }
});

```

```
result:
{
  acknowledged: true,
  insertedId: ObjectId("63f28055b4a0b3629d240dfd")
}


```
4. Tìm 1 quyển sách có lớn hơn 400 trang và đúng 2 thể loại
```
query:
db.book.find({
  "pages": { $gt: 400 },
  "genres": { $size: 2 }
});
```

```
result:
{
  _id: ObjectId("63f27957e94648ca020e0eff"),
  title: 'One Hundred Years of Solitude',
  author: 'Gabriel García Márquez',
  publication_date: '1967-06-01',
  pages: 417,
  genres: [
    'Novel',
    'Magic realism'
  ],
  publisher: {
    name: 'Editorial Sudamericana',
    location: 'Buenos Aires, Argentina'
  }
}
{
  _id: ObjectId("63f27957e94648ca020e0f00"),
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  publication_date: '1954-07-29',
  pages: 1178,
  genres: [
    'Fantasy',
    'Adventure'
  ],
  publisher: {
    name: 'George Allen & Unwin',
    location: 'London, UK'
  }
}


```
5. Update thông tin của quyển sách có title là "One Hundred Years Of Solitude"
- publisher_date
- genres
- Publisher

```
query:
db.book.updateOne(
  { "title": "One Hundred Years of Solitude" },
  {
    $set: {
      "publication_date": "1967-05-30",
      "genres": ["Novel", "Magical Realism"],
      "publisher": {
        "name": "Harper & Row",
        "location": "New York, NY"
      }
    }
  }
);
```

```
result:

  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0

```
6. Delete những quyển sách xuất bản trước năm 1967

```
query:
db.book.deleteMany({ publication_date: { $lt: "1967-01-01" } })
```

```
result:
{
  acknowledged: true,
  deletedCount: 6
}


```