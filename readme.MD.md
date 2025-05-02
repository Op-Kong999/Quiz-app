# 📚 General Knowledge Quiz App

This is a **20-question general knowledge quiz** built using **HTML**, **CSS**, and **JavaScript with jQuery**.

It features:  
✅ A 2-minute countdown timer  
✅ Instant scoring on submit or when time runs out  
✅ A visually attractive, responsive design  
✅ Simple, easy-to-understand JavaScript

---

## 🛠 How It Works

- **HTML** contains all the questions and options (radio buttons).  
- **CSS** styles the layout, colors, and animations.  
- **JavaScript (with jQuery)** handles:
    - Timer countdown  
    - Form submission  
    - Answer checking (by comparing selected answers to correct ones)  
    - Final score display

---

## 📂 Files

| File         | Description                                  |
|--------------|--------------------------------------------|
| `index.html` | Main page with the quiz questions          |
| `styles.css` | Styling for layout, buttons, and visuals   |
| `script.js`  | Simplified jQuery code for timer and scoring |
| `README.md`  | Project overview and instructions         |

---

## ⏰ Timer

- Starts at **2 minutes (120 seconds)**.  
- Updates the display every second.  
- Automatically checks answers if time runs out.

---

## 📝 How to Mark Correct Answers

In the HTML, each correct answer’s `<input>` is marked with:  
```html
<input type="radio" name="q1" value="0">
```

The JavaScript checks for `value="0"` to know which selected answers are correct.

---

## 🚀 How to Run

1. Open `index.html` in your browser.  
2. Start answering the quiz — you have 2 minutes!  
3. Click **Submit** to see your score, or wait for the timer to finish.

---

## 👨‍💻 Author

**Jeremiah**  
📧 Email: ayomidejeremiah999@gmail.com  
📱 Phone: 09023118327

---

## 📄 License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the “Software”), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all  
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.
