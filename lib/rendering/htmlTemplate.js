import serialize from 'serialize-javascript';

export default function (html, initialState) {
  return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>TodoList</title>
      <script src="assets/vendor.js" charset="utf-8"></script>
      <style media="screen">
        body, html, #root {
          width: 100%;
          height: 100%;
          margin: 0;
        }
      </style>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${serialize(initialState)};
      </script>
      <script src="assets/index.js" charset="utf-8"></script>
    </body>
    </html>
  `);
}
