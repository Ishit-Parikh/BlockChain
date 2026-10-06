# Blockchain — Mid-Semester Practice Drill

B.Tech Year 4 · Semester 7 · Blockchain (Unit 1) · JG University

## Open it

Double-click `index.html`. No server, no install, no internet needed.

## What it covers

Every question comes from Unit 1 of the mid-semester syllabus:

- Evolution of digital transactions
- Centralized vs decentralized systems
- Distributed ledger technology
- Blockchain fundamentals and architecture
- Blocks and chain structure
- Hash functions
- Merkle trees
- Peer-to-peer networks
- Public, private and consortium blockchains
- Use cases and challenges

The bank was expanded from `Notes/Blockchain/PDF/Blockchain_Notes.pdf`
(ledger, nodes, hash, mining, types of blockchain).

## Formats

| Format | How it works |
|---|---|
| **MCQ** | Pick one option. |
| **MSQ** | Two or more options are correct — you must select every right one. A missed pick fails the question. |
| **Fill in the blank** | Type the answer. Capitalisation, punctuation and extra spaces are ignored, and several wordings are accepted. |

## Modes

- **Practice** — feedback and the explanation appear the moment you check.
- **Mock** — nothing is revealed until you finish, like the real paper.

## Other controls

- Filter by topic and by format; choose 10, 20, 40 or all questions.
- **Shuffle** or keep **syllabus order**.
- Keyboard: `1`–`9` pick or toggle options, `Enter` checks, `→` goes to the next question.
- Your progress is stored in the browser, so **only questions you answered wrong before**
  and **rehearse the ones I missed** will drill your weak spots.
- **Erase my saved progress** clears the record.

## Files

| File | Contents |
|---|---|
| `index.html` | Page structure |
| `styles.css` | Ledger-paper theme |
| `app.js` | Quiz logic, scoring, review, saved progress |
| `questions-u1a.js` | Unit 1 — MCQ |
| `questions-u1b.js` | Unit 1 — MSQ and fill in the blank |
| `questions-u1c.js` | Unit 1 — questions from the class notes |

Add new questions to any `questions-*.js` file by pushing an object onto
`window.Q_BANK`; the counts, topic chips and filters update themselves.

```js
{
  id: "u1-x01", unit: 1, topic: "Hash Functions", type: "mcq",
  q: "Question text?",
  options: ["A", "B", "C", "D"],
  answer: 1,            // index for mcq, array of indexes for msq
  explain: "Why."
}
```

For `type: "fib"` use `answer: ["accepted wording", "alternative"]` and drop `options`.
