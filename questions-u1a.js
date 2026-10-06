/* Blockchain Mid-Sem Practice Bank — Unit 1: MCQ */
window.Q_BANK = window.Q_BANK || [];
window.Q_BANK.push(
{
  id: "u1-01",
  unit: 1,
  topic: "Digital Transactions",
  type: "mcq",
  q: "The Bitcoin whitepaper primarily aimed to solve which problem of traditional digital payments?",
  options: [
    "Slow network speeds",
    "Double spending of digital money",
    "Lack of user interfaces",
    "High storage costs"
  ],
  answer: 1,
  explain: "Double spending means the same digital coin being spent twice. Bitcoin solved it without a trusted third party."
},
{
  id: "u1-02",
  unit: 1,
  topic: "Digital Transactions",
  type: "mcq",
  q: "In which year was the Bitcoin whitepaper 'A Peer-to-Peer Electronic Cash System' published?",
  options: ["2006", "2007", "2008", "2009"],
  answer: 2,
  explain: "Satoshi Nakamoto published the whitepaper on 31 October 2008. The Bitcoin network went live in January 2009."
},
{
  id: "u1-03",
  unit: 1,
  topic: "Digital Transactions",
  type: "mcq",
  q: "Bitcoin was created by:",
  options: [
    "Vitalik Buterin",
    "Satoshi Nakamoto",
    "Nick Szabo",
    "Hal Finney"
  ],
  answer: 1,
  explain: "Satoshi Nakamoto is the pseudonymous creator of Bitcoin. The real identity has never been confirmed."
},
{
  id: "u1-04",
  unit: 1,
  topic: "Centralized vs Decentralized",
  type: "mcq",
  q: "In a centralized system, the ledger of records is maintained by:",
  options: [
    "Every participating node",
    "A single central authority",
    "A group of random peers",
    "No one, records are automatic"
  ],
  answer: 1,
  explain: "A centralized system has one authority (bank, company) that owns and controls the authoritative copy of the data."
},
{
  id: "u1-05",
  unit: 1,
  topic: "Centralized vs Decentralized",
  type: "mcq",
  q: "Which of the following is a key advantage of a decentralized system over a centralized one?",
  options: [
    "It has a single point of failure",
    "It requires trust in one authority",
    "It has no single point of failure",
    "It always requires intermediaries"
  ],
  answer: 2,
  explain: "Because control and data are spread across many nodes, the failure or compromise of one node does not bring down the system."
},
{
  id: "u1-06",
  unit: 1,
  topic: "Centralized vs Decentralized",
  type: "mcq",
  q: "Who holds the decision-making power in a fully decentralized system?",
  options: [
    "The system administrator",
    "A single bank or company",
    "The collective network participants",
    "The government regulator"
  ],
  answer: 2,
  explain: "In a decentralized system no single entity rules; rules are enforced by protocol and agreed upon by the network participants."
},
{
  id: "u1-07",
  unit: 1,
  topic: "Distributed Ledger Technology",
  type: "mcq",
  q: "Distributed Ledger Technology (DLT) is best described as:",
  options: [
    "A ledger stored on a single central server",
    "A ledger shared and synchronized across many sites, institutions or nodes",
    "A spreadsheet shared over email",
    "A private database owned by one company"
  ],
  answer: 1,
  explain: "In DLT there is no single central database; copies of the ledger are replicated and kept in sync across many participants."
},
{
  id: "u1-08",
  unit: 1,
  topic: "Distributed Ledger Technology",
  type: "mcq",
  q: "A major impact of DLT on financial systems is that it reduces the need for:",
  options: [
    "Intermediaries and reconciliation",
    "Internet connectivity",
    "User authentication",
    "Transaction amounts"
  ],
  answer: 0,
  explain: "Since all parties share one agreed ledger, middlemen and repeated reconciliation between banks become largely unnecessary."
},
{
  id: "u1-09",
  unit: 1,
  topic: "Distributed Ledger Technology",
  type: "mcq",
  q: "How are transactions recorded in a distributed ledger?",
  options: [
    "Only by the central bank",
    "After validation and consensus among participants",
    "Randomly by any one node",
    "Manually by an auditor"
  ],
  answer: 1,
  explain: "A transaction is only appended after the network validates it and reaches consensus, so all copies stay consistent."
},
{
  id: "u1-10",
  unit: 1,
  topic: "Blockchain Fundamentals",
  type: "mcq",
  q: "Blockchain is fundamentally a type of:",
  options: [
    "Centralized database",
    "Distributed ledger",
    "Relational database",
    "File system"
  ],
  answer: 1,
  explain: "A blockchain is a distributed ledger where records are grouped into blocks and linked cryptographically in a chain."
},
{
  id: "u1-11",
  unit: 1,
  topic: "Blockchain Fundamentals",
  type: "mcq",
  q: "The immutability of a blockchain primarily comes from:",
  options: [
    "Encrypting all data with AES",
    "Cryptographic hashing that links each block to the previous one",
    "Keeping data in RAM",
    "Using a powerful central server"
  ],
  answer: 1,
  explain: "Each block stores the previous block's hash, so altering any block breaks every hash after it and is detected by the network."
},
{
  id: "u1-12",
  unit: 1,
  topic: "Blockchain Fundamentals",
  type: "mcq",
  q: "If a hacker alters the data inside one block of a chain, what happens next?",
  options: [
    "Only that block's hash changes",
    "Its hash changes and all later blocks no longer validate",
    "The previous block's hash changes",
    "Nothing, data changes are ignored"
  ],
  answer: 1,
  explain: "The block's own hash changes, which no longer matches the hash stored in the next block, so the entire chain after it becomes invalid."
},
{
  id: "u1-13",
  unit: 1,
  topic: "Blockchain Fundamentals",
  type: "mcq",
  q: "Which consensus-friendly property means the same input always produces the same hash?",
  options: [
    "Avalanche effect",
    "Determinism",
    "Reversibility",
    "Compression"
  ],
  answer: 1,
  explain: "A hash function is deterministic: the same input always gives the same fixed-length output, which lets nodes compare block hashes."
},
{
  id: "u1-14",
  unit: 1,
  topic: "Blockchain Fundamentals",
  type: "mcq",
  q: "Which statement about blockchain architecture is correct?",
  options: [
    "Only miners can ever see the ledger",
    "Data is appended, not overwritten, and replicated to peers",
    "Old transactions are deleted to save space",
    "One node decides which transactions are true"
  ],
  answer: 1,
  explain: "Blockchain is append-only and each participant keeps a copy, so history is preserved and independently verifiable."
},
{
  id: "u1-15",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "mcq",
  q: "The very first block of a blockchain is called the:",
  options: [
    "Root block",
    "Genesis block",
    "Prime block",
    "Base block"
  ],
  answer: 1,
  explain: "The genesis block (block 0) is hardcoded into the protocol and has no previous block, so its previous-hash field is zero."
},
{
  id: "u1-16",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "mcq",
  q: "The genesis block's previous block hash field contains:",
  options: [
    "The hash of block 1",
    "All zeros / a null value",
    "The miner's public key",
    "A random nonce"
  ],
  answer: 1,
  explain: "Since no block precedes it, the genesis block carries a zero (null) previous hash, anchoring the whole chain."
},
{
  id: "u1-17",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "mcq",
  q: "A nonce in a block is:",
  options: [
    "The total number of transactions",
    "An arbitrary value miners change to find a valid block hash",
    "The public key of the miner",
    "The timestamp of the block"
  ],
  answer: 1,
  explain: "Nonce stands for 'number used once'. Miners vary it repeatedly until the block hash meets the required target."
},
{
  id: "u1-18",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "mcq",
  q: "What is the target average time between two blocks in Bitcoin?",
  options: ["1 minute", "5 minutes", "10 minutes", "1 hour"],
  answer: 2,
  explain: "Bitcoin targets one block every 10 minutes on average, adjusted through difficulty retargeting."
},
{
  id: "u1-19",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "mcq",
  q: "A block hash in Bitcoin is a:",
  options: [
    "128-bit number",
    "256-bit SHA-256 hash",
    "64-bit checksum",
    "Variable length string"
  ],
  answer: 1,
  explain: "Bitcoin uses double SHA-256, producing a fixed 256-bit (32 byte) hash for each block."
},
{
  id: "u1-20",
  unit: 1,
  topic: "Hash Functions",
  type: "mcq",
  q: "Which hash algorithm does Bitcoin use for mining and block hashing?",
  options: ["MD5", "SHA-1", "SHA-256", "SHA-512"],
  answer: 2,
  explain: "Bitcoin uses the SHA-256 algorithm from the SHA-2 family (applied twice, i.e. double SHA-256)."
},
{
  id: "u1-21",
  unit: 1,
  topic: "Hash Functions",
  type: "mcq",
  q: "A small change in the input of a hash function causing a completely different output is called:",
  options: [
    "The avalanche effect",
    "The mirror effect",
    "Data compression",
    "Key expansion"
  ],
  answer: 0,
  explain: "The avalanche effect means flipping one bit of input flips roughly half the output bits, making tampering easy to detect."
},
{
  id: "u1-22",
  unit: 1,
  topic: "Hash Functions",
  type: "mcq",
  q: "Pre-image resistance of a hash function means:",
  options: [
    "Two inputs can produce the same hash easily",
    "Given a hash value, it is computationally infeasible to find the original input",
    "The input can be recovered quickly from the hash",
    "The output length equals the input length"
  ],
  answer: 1,
  explain: "Pre-image resistance prevents an attacker from reverse-engineering the message from its hash, protecting stored passwords and links."
},
{
  id: "u1-23",
  unit: 1,
  topic: "Hash Functions",
  type: "mcq",
  q: "Collision resistance means:",
  options: [
    "It is hard to find two different inputs that produce the same hash",
    "The same input always gives different hashes",
    "Hashes can be reversed easily",
    "The output is always zero"
  ],
  answer: 0,
  explain: "If collisions were easy, attackers could substitute a different document with the same hash and forge records."
},
{
  id: "u1-24",
  unit: 1,
  topic: "Hash Functions",
  type: "mcq",
  q: "The SHA-256 hash function produces an output of:",
  options: ["64 bits", "128 bits", "256 bits", "512 bits"],
  answer: 2,
  explain: "As the name says, SHA-256 always returns a fixed 256-bit (32-byte) digest regardless of input size."
},
{
  id: "u1-25",
  unit: 1,
  topic: "Hash Functions",
  type: "mcq",
  q: "Which of these is NOT a desirable property of a cryptographic hash function?",
  options: [
    "Deterministic output",
    "Avalanche effect",
    "Easy to reverse and recover the input",
    "Collision resistance"
  ],
  answer: 2,
  explain: "Cryptographic hashes must be one-way; being reversible would allow attackers to reconstruct original data from hashes."
},
{
  id: "u1-26",
  unit: 1,
  topic: "Merkle Trees",
  type: "mcq",
  q: "The leaf nodes of a Merkle tree contain:",
  options: [
    "Miner public keys",
    "Hashes of individual transactions",
    "Block nonces",
    "Timestamps of the block"
  ],
  answer: 1,
  explain: "Each transaction is hashed, and those hashes form the leaves that are repeatedly paired and hashed up to the root."
},
{
  id: "u1-27",
  unit: 1,
  topic: "Merkle Trees",
  type: "mcq",
  q: "The Merkle root of a block is stored in the:",
  options: [
    "Transaction list",
    "Block header",
    "Wallet file",
    "Peer message only"
  ],
  answer: 1,
  explain: "Only the single 32-byte Merkle root goes into the block header, while all transactions live in the block body."
},
{
  id: "u1-28",
  unit: 1,
  topic: "Merkle Trees",
  type: "mcq",
  q: "What is the main benefit of a Merkle tree for light nodes (SPV wallets)?",
  options: [
    "They can verify a transaction belongs to a block without downloading the whole block",
    "They can mine blocks faster",
    "They eliminate the need for consensus",
    "They encrypt all transactions"
  ],
  answer: 0,
  explain: "A Merkle proof uses an authentication path of O(log n) hashes, so a light client can confirm inclusion without the full block."
},
{
  id: "u1-29",
  unit: 1,
  topic: "Merkle Trees",
  type: "mcq",
  q: "How is a Merkle root computed?",
  options: [
    "By adding all transaction values",
    "By repeatedly hashing pairs of hashes until a single root hash remains",
    "By signing the block with a private key",
    "By averaging all transaction IDs"
  ],
  answer: 1,
  explain: "Transactions are hashed in pairs, the pair-hashes are hashed again in pairs, and this continues until one root hash is left."
},
{
  id: "u1-30",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "mcq",
  q: "In a peer-to-peer network, each node typically acts as:",
  options: [
    "Only a client",
    "Only a server",
    "Both client and server",
    "Neither, only a router"
  ],
  answer: 2,
  explain: "Peers both request and serve data (sometimes called a 'servent'), so no dedicated central server is needed."
},
{
  id: "u1-31",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "mcq",
  q: "How does a newly broadcast transaction reach the whole blockchain network?",
  options: [
    "It is mailed to the central server",
    "It is gossiped/propagated node to node across the P2P network",
    "Only miners can see it",
    "It is stored in the DNS"
  ],
  answer: 1,
  explain: "Nodes relay inventory messages to their peers, so the transaction floods the network by gossip propagation."
},
{
  id: "u1-32",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "mcq",
  q: "A full node in a blockchain network is one that:",
  options: [
    "Stores and independently validates the entire ledger from genesis",
    "Stores only the latest block",
    "Only sends money and never validates",
    "Runs exclusively on a mobile phone"
  ],
  answer: 0,
  explain: "Full nodes keep every block and verify all transactions and consensus rules themselves instead of trusting others."
},
{
  id: "u1-33",
  unit: 1,
  topic: "Blockchain Types",
  type: "mcq",
  q: "Which blockchain allows anyone to read, write and participate without permission?",
  options: [
    "Private blockchain",
    "Consortium blockchain",
    "Public blockchain",
    "Permissioned ledger"
  ],
  answer: 2,
  explain: "Public blockchains (Bitcoin, Ethereum) are permissionless and fully decentralized; anyone can join and validate."
},
{
  id: "u1-34",
  unit: 1,
  topic: "Blockchain Types",
  type: "mcq",
  q: "A private (permissioned) blockchain differs from a public one mainly because:",
  options: [
    "It uses a different hash function",
    "Access and participation are restricted to approved entities",
    "It has no blocks or chains",
    "It cannot record transactions"
  ],
  answer: 1,
  explain: "Private chains restrict who may join and validate, giving higher speed and privacy at the cost of decentralization."
},
{
  id: "u1-35",
  unit: 1,
  topic: "Blockchain Types",
  type: "mcq",
  q: "A consortium blockchain is governed by:",
  options: [
    "A single company",
    "A group of organizations",
    "Anonymous random users",
    "No one, it is fully automatic"
  ],
  answer: 1,
  explain: "Consortium (federated) chains are controlled by a group of participants, making them semi-decentralized."
},
{
  id: "u1-36",
  unit: 1,
  topic: "Blockchain Types",
  type: "mcq",
  q: "Which type of blockchain offers the highest level of decentralization?",
  options: [
    "Private blockchain",
    "Consortium blockchain",
    "Public blockchain",
    "All are equally decentralized"
  ],
  answer: 2,
  explain: "Public chains are open to everyone and have no controlling entity, so they are the most decentralized (but usually the slowest)."
},
{
  id: "u1-37",
  unit: 1,
  topic: "Use Cases & Challenges",
  type: "mcq",
  q: "Which of the following is a well-known real-world use case of blockchain?",
  options: [
    "Supply chain traceability",
    "Word processing",
    "Image resizing",
    "Local printer management"
  ],
  answer: 0,
  explain: "Supply chains use blockchain to record each step of a product's journey transparently and tamper-proof."
},
{
  id: "u1-38",
  unit: 1,
  topic: "Use Cases & Challenges",
  type: "mcq",
  q: "Recording land ownership titles on a blockchain is attractive because records become:",
  options: [
    "Tamper-proof and publicly auditable",
    "Automatically deleted each year",
    "Editable by the buyer",
    "Stored only on paper"
  ],
  answer: 0,
  explain: "Land registries benefit from immutability and transparent provenance, reducing fraud and disputed ownership."
},
{
  id: "u1-39",
  unit: 1,
  topic: "Use Cases & Challenges",
  type: "mcq",
  q: "The biggest technical challenge facing first-generation blockchains is:",
  options: [
    "Scalability (limited transactions per second)",
    "Too much storage is free",
    "Excessive transaction speed",
    "Lack of users wanting privacy"
  ],
  answer: 0,
  explain: "Bitcoin handles roughly 7 TPS and Ethereum far more but still limited, so throughput and latency are key scalability issues."
},
{
  id: "u1-40",
  unit: 1,
  topic: "Use Cases & Challenges",
  type: "mcq",
  q: "Which is a widely cited disadvantage of Proof of Work blockchains?",
  options: [
    "High energy consumption",
    "They require no hardware",
    "They cannot process transactions",
    "They have no ledger"
  ],
  answer: 0,
  explain: "Competitive hash computation consumes large amounts of electricity, which is the main environmental criticism of PoW."
},
{
  id: "u1-41",
  unit: 1,
  topic: "Digital Transactions",
  type: "mcq",
  q: "Traditional digital payment systems solve the double-spending problem by:",
  options: [
    "Using a trusted central intermediary such as a bank",
    "Using Merkle trees alone",
    "Removing all records",
    "Encrypting money with hashes"
  ],
  answer: 0,
  explain: "Banks act as the authority that debits one account before crediting another; Bitcoin removes that trusted third party instead."
},
{
  id: "u1-42",
  unit: 1,
  topic: "Blockchain Fundamentals",
  type: "mcq",
  q: "Which sequence correctly describes how a blockchain grows?",
  options: [
    "Transactions are validated, grouped into a block, hashed and linked to the previous block, then broadcast",
    "Blocks are deleted, transactions are erased, hash is recomputed",
    "A central server approves and the chain is rewritten from scratch",
    "Transactions are hashed before users send them"
  ],
  answer: 0,
  explain: "Validate → bundle → hash/link → broadcast → consensus. New blocks always append after the current head of the chain."
}
);
