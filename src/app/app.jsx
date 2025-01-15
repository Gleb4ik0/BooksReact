// functional component
// Rules:
// 1. the name MUST start with big letter (PascalCase)
// 2. MUST return JSX
import Book from "../compenents/Book/book";
import "./app.css";
import Header from "../compenents/header/header";
export const num = 10;
export let str = "abc";
import Footer from "../compenents/footer/footer";
export default function App() {
  return (
    <div className="app">
      {/* this is a comment */}
      <Header />
      <div className="books">
        <Book
          name="Coding Simple"
          discripsen="This book is a beginner-friendly guide to learning programming.Featuring Linux's Tux mascot, it covers key programming concepts with practical examples."
          img="https://avatars.mds.yandex.net/i?id=bf01bd06af232090b27239d7517dca527a4583f0-5220445-images-thumbs&n=13"
        />
        <Book
          name="Get Coding"
          discripsen="This book introduces HTML, CSS, and JavaScript in a fun and interactive way.Perfect for young learners, it is supported by an expert coding community."
          img="https://avatars.mds.yandex.net/i?id=a8965c68c4cb182e3f202bc701ee8951_l-7755770-images-thumbs&n=13"
        />
        <Book
          name="Best Books for programmers 2019"
          discripsen="This collection highlights essential programming books for CSS, PHP, Java, and HTML.Perfect for both beginners and professionals, it covers key programming concepts."
          img="https://avatars.mds.yandex.net/i?id=5364d24a426334c31bf78fedc4e432afe0899321-9700166-images-thumbs&n=13"
        />
        <Book
          name="Java Script"
          discripsen="This book dives into advanced JavaScript techniques for experienced programmers.Ideal for developers looking to elevate their JavaScript coding skills."
          img="https://avatars.mds.yandex.net/i?id=090be5b8808b63c0738c49e635e6e6f6149c03b7-4958973-images-thumbs&n=13"
        />
      </div>
      <Footer />
    </div>
  );
}
