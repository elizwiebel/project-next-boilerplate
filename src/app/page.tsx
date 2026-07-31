export default function Home() {
  return (
    <div>
      <main className="p-8">
        <section>
          <hr />
          <h1>H1 - Welcome to Next.js!</h1>
          <h2>H2 - Welcome to Next.js!</h2>
          <h3>H3 - Welcome to Next.js!</h3>
          <h4>H4 - Welcome to Next.js!</h4>
          <h5>H5 - Welcome to Next.js!</h5>
          <h6>H6 - Welcome to Next.js!</h6>
          <p>
            This is a paragraph element with an <a href="#">anchor element</a> inside of it.
          </p>
          <ul>
            <li>Bullet point</li>
            <li>
              Bullet point
              <ul>
                <li>Nested bullet point</li>
                <li>Nested bullet point</li>
              </ul>
            </li>
            <li>Bullet point</li>
          </ul>
          <hr />
        </section>
      </main>
    </div>
  );
}
