/* Blockchain Mid-Sem Practice Bank — Unit 1: MSQ + Fill in the Blanks */
window.Q_BANK = window.Q_BANK || [];
window.Q_BANK.push(
/* ---------- MSQ (select all that apply) ---------- */
{
  id: "u1-m01",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "msq",
  q: "Which of the following fields are part of a blockchain block?",
  options: [
    "Previous block's hash",
    "Timestamp",
    "Nonce",
    "Merkle root",
    "Miner's bank password"
  ],
  answer: [0, 1, 2, 3],
  explain: "A block header holds previous hash, timestamp, nonce, difficulty bits and Merkle root. The transaction list follows in the body."
},
{
  id: "u1-m02",
  unit: 1,
  topic: "Hash Functions",
  type: "msq",
  q: "Which are essential properties of a cryptographic hash function?",
  options: [
    "Deterministic output",
    "Pre-image resistance",
    "Collision resistance",
    "Avalanche effect",
    "Easy mathematical inversion"
  ],
  answer: [0, 1, 2, 3],
  explain: "Determinism, pre-image resistance, second pre-image resistance and collision resistance are the required properties. Hashes must NOT be invertible."
},
{
  id: "u1-m03",
  unit: 1,
  topic: "Distributed Ledger Technology",
  type: "msq",
  q: "Which are genuine benefits of distributed ledger technology?",
  options: [
    "No reliance on a single central authority",
    "Transparency of records for participants",
    "Immutability of committed data",
    "Reduced need for intermediaries",
    "Guaranteed anonymity of every user"
  ],
  answer: [0, 1, 2, 3],
  explain: "DLT gives shared control, transparency, immutability and disintermediation. It offers pseudonymity, not guaranteed anonymity."
},
{
  id: "u1-m04",
  unit: 1,
  topic: "Blockchain Types",
  type: "msq",
  q: "Which characteristics belong to a public blockchain?",
  options: [
    "Permissionless participation",
    "High decentralization",
    "Open transaction transparency",
    "Restricting membership to invited nodes"
  ],
  answer: [0, 1, 2],
  explain: "Public chains are open, transparent and decentralized. Restricting membership describes a private/permissioned chain."
},
{
  id: "u1-m05",
  unit: 1,
  topic: "Use Cases & Challenges",
  type: "msq",
  q: "Which are commonly cited challenges of blockchain technology?",
  options: [
    "Scalability limits",
    "High energy consumption of PoW",
    "Privacy and regulatory concerns",
    "Interoperability between different chains",
    "Unlimited transaction throughput"
  ],
  answer: [0, 1, 2, 3],
  explain: "Scalability, energy, privacy/regulation and interoperability are the standard challenges. Unlimited throughput is the opposite of the scalability problem."
},
{
  id: "u1-m06",
  unit: 1,
  topic: "Use Cases & Challenges",
  type: "msq",
  q: "Which are recognized application areas of blockchain?",
  options: [
    "Supply chain management",
    "Land record management",
    "Cross-border payments",
    "Healthcare record sharing",
    "Offline photo editing"
  ],
  answer: [0, 1, 2, 3],
  explain: "Supply chain, land records, payments and health records all fit blockchain's tamper-proof shared-record strength."
},
{
  id: "u1-m07",
  unit: 1,
  topic: "Merkle Trees",
  type: "msq",
  q: "Which are advantages of using a Merkle tree in a block?",
  options: [
    "Efficient verification of a single transaction",
    "Quick detection of tampering with any transaction",
    "Enables light clients to run without full data",
    "Reduces the data that must be transmitted for a proof",
    "Encrypts the transactions so they stay secret"
  ],
  answer: [0, 1, 2, 3],
  explain: "Merkle trees give O(log n) proofs, tamper detection and light-client support. They provide integrity, not confidentiality."
},
{
  id: "u1-m08",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "msq",
  q: "Which are true of a peer-to-peer blockchain network?",
  options: [
    "There is no mandatory central server",
    "Each node shares part of the workload",
    "The network is self-organizing and fault tolerant",
    "Every node must store the full ledger at all times",
    "It depends on one master node"
  ],
  answer: [0, 1, 2],
  explain: "P2P networks are server-less, workload-sharing and resilient. Full storage is only required of full nodes; light nodes store little."
},
{
  id: "u1-m09",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "msq",
  q: "Which statements about the genesis block are correct?",
  options: [
    "It is the first block of the chain",
    "It has no predecessor block",
    "It is hardcoded into the protocol software",
    "It can be edited freely by miners",
    "Its previous-block hash field is zero"
  ],
  answer: [0, 1, 2, 4],
  explain: "The genesis block is fixed in the client software and cannot be rewritten without forking the entire network."
},
{
  id: "u1-m10",
  unit: 1,
  topic: "Blockchain Types",
  type: "msq",
  q: "Which blockchains are classified as permissioned?",
  options: [
    "Private blockchain",
    "Consortium blockchain",
    "Public Bitcoin network",
    "A bank's internal shared ledger"
  ],
  answer: [0, 1, 3],
  explain: "Private, consortium and organization-internal chains restrict who may participate. Bitcoin's public network is permissionless."
},
{
  id: "u1-m11",
  unit: 1,
  topic: "Blockchain Fundamentals",
  type: "msq",
  q: "Why is a blockchain considered tamper-evident and immutable?",
  options: [
    "Each block stores the previous block's hash",
    "All nodes hold copies and validate the chain",
    "Altering history would require retaking consensus (e.g. 51% of hash power)",
    "Blocks are written with erasable ink",
    "Data is compressed after each block"
  ],
  answer: [0, 1, 2],
  explain: "Hash linkage plus distributed validation plus the economic cost of re-doing proof of work makes rewriting history impractical."
},
{
  id: "u1-m12",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "msq",
  q: "Which operations does a full node perform?",
  options: [
    "Storing the complete blockchain",
    "Validating every transaction against consensus rules",
    "Independently verifying new blocks",
    "Sharing the ledger with peers",
    "Signing transactions on behalf of users"
  ],
  answer: [0, 1, 2, 3],
  explain: "Full nodes store, validate, verify and relay. They never sign for users — only the user's private key can do that."
},
{
  id: "u1-m13",
  unit: 1,
  topic: "Centralized vs Decentralized",
  type: "msq",
  q: "Which are typical drawbacks of a centralized system?",
  options: [
    "Single point of failure",
    "Single point of control / trust required",
    "Performance bottleneck at the centre",
    "Censorship can be imposed by the operator",
    "Automatic censorship resistance"
  ],
  answer: [0, 1, 2, 3],
  explain: "Centralization concentrates failure, control, load and censorship power in one operator — the exact issues decentralization targets."
},
{
  id: "u1-m14",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "msq",
  q: "What kind of data can be stored inside a blockchain block?",
  options: [
    "Transaction records",
    "Asset ownership details",
    "Timestamps",
    "Smart contract code",
    "Live video streams"
  ],
  answer: [0, 1, 2, 3],
  explain: "Blocks hold structured, modest-size data — transactions, ownership records, timestamps and contract code, not raw media streams."
},
{
  id: "u1-m15",
  unit: 1,
  topic: "Distributed Ledger Technology",
  type: "msq",
  q: "Which problems of traditional record-keeping does blockchain aim to solve?",
  options: [
    "Double spending of digital value",
    "Need for a trusted intermediary",
    "Delayed reconciliation between parties",
    "Tamper-prone paper or siloed records",
    "The need for the internet"
  ],
  answer: [0, 1, 2, 3],
  explain: "Blockchain removes double spend, middlemen, reconciliation lag and fragile records. Internet connectivity is still required."
},
{
  id: "u1-m16",
  unit: 1,
  topic: "Blockchain Fundamentals",
  type: "msq",
  q: "Which technologies/techniques underpin blockchain architecture?",
  options: [
    "Cryptographic hash functions",
    "Merkle trees",
    "Peer-to-peer networking",
    "Consensus algorithms",
    "Centralized SQL replication only"
  ],
  answer: [0, 1, 2, 3],
  explain: "Hashing, Merkle trees, P2P networking and consensus together make a blockchain. Central SQL replication is a normal database technique."
},
{
  id: "u1-m17",
  unit: 1,
  topic: "Hash Functions",
  type: "msq",
  q: "Which of these inputs would be hashed to preserve integrity in a blockchain?",
  options: [
    "Block contents (transactions)",
    "Block header fields",
    "The previous block hash",
    "A password stored by a website"
  ],
  answer: [0, 1, 2],
  explain: "Blocks hash their contents, header and linkage. Website password hashing is a general security use, not part of a block's structure."
},
{
  id: "u1-m18",
  unit: 1,
  topic: "Use Cases & Challenges",
  type: "msq",
  q: "Which statements about blockchain transparency are correct?",
  options: [
    "On a public chain anyone can inspect transactions using an explorer",
    "Wallet addresses are pseudonymous, not linked to real names by default",
    "All node software is typically open source",
    "Every user's real-world identity is published with each transaction"
  ],
  answer: [0, 1, 2],
  explain: "Public chains are fully auditable and open source, but identities appear only as pseudonymous addresses until deliberately linked."
},

/* ---------- Fill in the blanks ---------- */
{
  id: "u1-f01",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "fib",
  q: "The first block of a blockchain is called the ______ block.",
  answer: ["genesis", "genesis block", "block 0", "block zero"],
  explain: "Genesis block — block 0, hardcoded into the protocol with a zero previous-hash field."
},
{
  id: "u1-f02",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "fib",
  q: "Each block stores the cryptographic hash of the ______ block.",
  answer: ["previous", "prior", "preceding", "previous block", "the previous"],
  explain: "Storing the previous block's hash is what creates the 'chain' and makes old data tamper-evident."
},
{
  id: "u1-f03",
  unit: 1,
  topic: "Hash Functions",
  type: "fib",
  q: "Bitcoin uses the ______ -256 hash algorithm for mining and block identification.",
  answer: ["sha", "sha-256", "sha256", "sha 256", "secure hash algorithm"],
  explain: "SHA-256 (Secure Hash Algorithm, 256-bit) from the SHA-2 family, applied twice in Bitcoin."
},
{
  id: "u1-f04",
  unit: 1,
  topic: "Hash Functions",
  type: "fib",
  q: "The output length of SHA-256 is fixed at ______ bits.",
  answer: ["256", "256 bits", "256-bit"],
  explain: "Whatever the input size, SHA-256 always returns a 256-bit (32-byte) digest."
},
{
  id: "u1-f05",
  unit: 1,
  topic: "Merkle Trees",
  type: "fib",
  q: "A binary tree of transaction hashes whose final top hash summarizes the block is called a ______ tree.",
  answer: ["merkle", "merkle tree", "binary hash"],
  explain: "The Merkle tree ends in a single root hash that commits to every transaction in the block."
},
{
  id: "u1-f06",
  unit: 1,
  topic: "Merkle Trees",
  type: "fib",
  q: "The single summary hash at the top of a Merkle tree is the ______ root.",
  answer: ["merkle", "merkle root"],
  explain: "The Merkle root goes in the block header; change one transaction and the root changes."
},
{
  id: "u1-f07",
  unit: 1,
  topic: "Merkle Trees",
  type: "fib",
  q: "In a Merkle tree the leaf nodes are ______ of the individual transactions.",
  answer: ["hashes", "hash", "transaction hashes", "sha256 hashes"],
  explain: "Each transaction ID (its hash) forms a leaf; leaves are paired and re-hashed up to the root."
},
{
  id: "u1-f08",
  unit: 1,
  topic: "Distributed Ledger Technology",
  type: "fib",
  q: "A ledger that is shared and synchronized across multiple nodes or sites is called a ______ ledger.",
  answer: ["distributed", "shared", "distributed ledger"],
  explain: "Distributed Ledger Technology (DLT) — one logical ledger, many replicated copies kept in sync by consensus."
},
{
  id: "u1-f09",
  unit: 1,
  topic: "Digital Transactions",
  type: "fib",
  q: "Spending the same digital coin twice is known as the double ______ problem.",
  answer: ["spending", "spend", "double spending"],
  explain: "Double spending is the core problem Bitcoin solved without relying on a trusted bank."
},
{
  id: "u1-f10",
  unit: 1,
  topic: "Digital Transactions",
  type: "fib",
  q: "Bitcoin was created by the pseudonym ______ ______.",
  answer: ["satoshi nakamoto", "satoshi", "nakamoto"],
  explain: "Satoshi Nakamoto published the whitepaper in 2008 and mined the genesis block in 2009; the identity remains unknown."
},
{
  id: "u1-f11",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "fib",
  q: "In a peer-to-peer network every participating device is called a ______.",
  answer: ["node", "peer", "peer node"],
  explain: "Peers (nodes) both consume and provide data, removing the need for a central server."
},
{
  id: "u1-f12",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "fib",
  q: "Miners repeatedly change the ______ to try to produce a hash below the target value.",
  answer: ["nonce", "the nonce", "n nonce"],
  explain: "Nonce = 'number used once'; it is the freely adjustable field used to grind out a valid hash."
},
{
  id: "u1-f13",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "fib",
  q: "The target hash a block must be below is adjusted by changing the mining ______.",
  answer: ["difficulty", "difficulty level", "diff"],
  explain: "Higher difficulty means a smaller target range, so valid blocks become rarer and block time stays near 10 minutes."
},
{
  id: "u1-f14",
  unit: 1,
  topic: "Blockchain Types",
  type: "fib",
  q: "A blockchain governed by a group of organizations rather than one is called a ______ blockchain.",
  answer: ["consortium", "federated", "consortium blockchain", "federated blockchain"],
  explain: "Consortium (federated) chains are semi-decentralized — controlled by several organizations, e.g. Hyperledger Fabric style networks."
},
{
  id: "u1-f15",
  unit: 1,
  topic: "Blockchain Fundamentals",
  type: "fib",
  q: "Because committed blocks cannot be altered, blockchain data is said to be ______.",
  answer: ["immutable", "immutable", "tamper proof", "tamper-proof", "permanent"],
  explain: "Immutability follows from hash linkage plus the cost of re-establishing consensus over the whole chain."
},
{
  id: "u1-f16",
  unit: 1,
  topic: "Blockchain Fundamentals",
  type: "fib",
  q: "The main record-keeping innovation behind blockchain is called distributed ______ technology.",
  answer: ["ledger", "ledger technology", "dlt"],
  explain: "DLT — Distributed Ledger Technology — is the umbrella term; blockchain is one kind of DLT."
},
{
  id: "u1-f17",
  unit: 1,
  topic: "Centralized vs Decentralized",
  type: "fib",
  q: "A system with one central authority and a single point of failure is called a ______ system.",
  answer: ["centralized", "centralised", "central"],
  explain: "Centralized systems concentrate control and data in one place; decentralization distributes both."
},
{
  id: "u1-f18",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "fib",
  q: "On average a new Bitcoin block is found every ______ minutes.",
  answer: ["10", "ten", "10 minutes"],
  explain: "Bitcoin targets 10 minutes per block and retargets difficulty every 2016 blocks to hold that average."
}
);
