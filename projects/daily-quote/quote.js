document.addEventListener("DOMContentLoaded", () => {
  const quoteEl = document.getElementById("daily-quote");

  const quotes = [
    "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
    "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
    "“Programs must be written for people to read, and only incidentally for machines to execute.” – Harold Abelson",
    "“Before software can be reusable it first has to be usable.” – Ralph Johnson",
    "“Simplicity is the soul of efficiency.” – Austin Freeman",
    "“Fix the cause, not the symptom.” – Steve Maguire",
    "“Make it work, make it right, make it fast.” – Kent Beck",
    "“Code never lies, comments sometimes do.” – Ron Jeffries",
    "“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
    "“Clean code always looks like it was written by someone who cares.” – Michael Feathers",
    "“Talk is cheap. Show me the code.” – Linus Torvalds",
    "“First, solve the problem. Then, write the code.” – John Johnson",
    "“Good code is its own best documentation.” – Steve McConnell",
    "“Programming isn’t about what you know; it’s about what you can figure out.” – Chris Pine",
    "“Software is a great combination between artistry and engineering.” – Bill Gates",
    "“It’s not a bug – it’s an undocumented feature.” – Anonymous",
    "“One man’s crappy software is another man’s full-time job.” – Jessica Gaston",
    "“The best way to predict the future is to invent it.” – Alan Kay",
    "“Premature optimization is the root of all evil.” – Donald Knuth",
    "“A good programmer is someone who looks both ways before crossing a one-way street.” – Doug Linder",
    "“Programming is the art of telling another human what one wants the computer to do.” – Donald Knuth",
    "“Programs are meant to be read by humans and only incidentally for computers to execute.” – Harold Abelson",
    "“If you can't write it down in English, you can't code it.” – Peter Halpern",
    "“Measuring programming progress by lines of code is like measuring aircraft building progress by weight.” – Bill Gates",
    "“Computers are good at following instructions, but not at reading your mind.” – Donald Knuth",
    "“Programming is the closest thing we have to a superpower.” – Drew Houston",
    "“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.” – John Woods",
    "“The most disastrous thing you can ever learn is your first programming language.” – Alan Kay",
    "“In theory, there is no difference between theory and practice. But, in practice, there is.” – Jan L. A. van de Snepscheut",
    "“Learning to write programs stretches your mind and helps you think better.” – Bill Gates",
    "“Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.” – Patrick McKenzie",
    "“There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies.” – Tony Hoare",
    "“You can’t have great software without a great team, and most software teams behave like dysfunctional families.” – Jim McCarthy",
    "“Programming languages should be designed not by piling feature on top of feature, but by removing the weaknesses and restrictions.” – Jean Ichbiah",
    "“Testing leads to failure, and failure leads to understanding.” – Burt Rutan",
    "“Programming is not easy like Sunday morning, it’s silent poetry.” – Waseem Latif",
    "“The best thing about a boolean is even if you are wrong, you are only off by a bit.” – Anonymous",
    "“When in doubt, use brute force.” – Ken Thompson",
    "“Controlling complexity is the essence of computer programming.” – Brian Kernighan",
    "“You miss 100% of the bugs you don’t test for.” – Anonymous"
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex];
});
