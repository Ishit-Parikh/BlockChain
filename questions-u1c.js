/* Blockchain Mid-Sem Practice Bank — Unit 1: from the class notes
   Sources: Ledger · Nodes (full/partial) · Hash · Mining & Miners · Types of Blockchain
   Topics are restricted to the Unit 1 syllabus list. */
window.Q_BANK = window.Q_BANK || [];
window.Q_BANK.push(

/* ================= LEDGER ================= */
{
  id: "u1n01",
  unit: 1,
  topic: "Distributed Ledger Technology",
  type: "mcq",
  q: "In a blockchain, what does every participant included in the network hold?",
  options: [
    "A copy of the ledger",
    "Only the blocks they personally mined",
    "A summary of the previous day of trades",
    "Nothing — records are held by the bank"
  ],
  answer: 0,
  explain: "The notes state a copy of the ledger is present with everyone included in the blockchain, so it is distributed among all participants."
},
{
  id: "u1n02",
  unit: 1,
  topic: "Distributed Ledger Technology",
  type: "msq",
  q: "Which properties of the ledger are stated in the class notes?",
  options: [
    "A copy is present with every participant",
    "Every transaction is publicly broadcast to the network",
    "The data is immutable once recorded",
    "Every transaction is recorded with a proper date and time",
    "The ledger owner can edit entries freely"
  ],
  answer: [0, 1, 2, 3],
  explain: "Ledger = distributed, public, immutable, timestamped record of transactions. Editability would defeat the whole purpose."
},
{
  id: "u1n03",
  unit: 1,
  topic: "Distributed Ledger Technology",
  type: "fib",
  q: "Because the ledger is distributed among all participants, there is no single ______ copy of the record held by one authority.",
  answer: ["authoritative", "central", "official", "master", "authoritative master"],
  explain: "Replicated copies plus consensus replace a single authoritative master copy."
},
{
  id: "u1n04",
  unit: 1,
  topic: "Distributed Ledger Technology",
  type: "fib",
  q: "The ledger records every transaction along with a proper date and ______.",
  answer: ["time", "timestamp", "time stamp", "date and time"],
  explain: "Recording date and time gives the ledger an auditable chronological order, which anti-replay schemes rely on."
},
{
  id: "u1n05",
  unit: 1,
  topic: "Blockchain Fundamentals",
  type: "mcq",
  q: "\"Every transaction is publicly broadcast to the network\" means:",
  options: [
    "It is propagated to the participating nodes so all of them can see and verify it",
    "It is broadcast on television and radio",
    "Only the miner of the next block can view it",
    "It is published by the government authority"
  ],
  answer: 0,
  explain: "Broadcasting makes the transaction visible to the whole network, which is what lets independent nodes validate and relay it."
},
{
  id: "u1n06",
  unit: 1,
  topic: "Blockchain Fundamentals",
  type: "fib",
  q: "The four headline properties of the ledger in the notes are: distributed, public, immutable and ______.",
  answer: ["timestamped", "timestamp", "time-stamped"],
  explain: "Distributed ledger technology gives a public, immutable, timestamped record of transactions shared by all participants."
},

/* ================= NODES ================= */
{
  id: "u1n07",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "mcq",
  q: "A full node maintains which of the following?",
  options: [
    "A complete, up-to-date copy of the blockchain from the genesis block onward",
    "Only the block headers",
    "Only the transactions in its own wallet",
    "A partial index of unconfirmed transactions"
  ],
  answer: 0,
  explain: "Initiate: a full node downloads and maintains the whole chain from the genesis block and validates everything independently."
},
{
  id: "u1n08",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "msq",
  q: "Which are responsibilities of a full node?",
  options: [
    "Download and maintain a complete copy of the blockchain",
    "Independently validate every block and every transaction",
    "Receive, verify and then relay transactions and blocks to other nodes",
    "Store only the transactions belonging to its own wallet",
    "Trust whatever the block it downloads claims"
  ],
  answer: [0, 1, 2],
  explain: "Full nodes verify then rebroadcast, propagating data network-wide. Storing only wallet transactions describes a partial node; blind trust defeats validation."
},
{
  id: "u1n09",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "mcq",
  q: "How does a full node handle a newly broadcast transaction?",
  options: [
    "It verifies it and, if valid, relays (re-broadcasts) it to other nodes",
    "It stores it silently and never tells anyone",
    "It mails it to a central head entity",
    "It adds it to its local chain immediately without telling anyone"
  ],
  answer: 0,
  explain: "Broadcast: the node receives, verifies, then relays the transaction so it propagates network-wide — that is how gossip floods the network."
},
{
  id: "u1n10",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "mcq",
  q: "According to the class notes, a transaction is accepted and added to the chain only after it:",
  options: [
    "Passes full consensus validation, requiring a 50%+ majority approval rate from the network",
    "Is signed by two participants",
    "Is confirmed by the head entity of a private chain",
    "Reaches the maximum block size"
  ],
  answer: 0,
  explain: "The notes state a transaction needs full consensus validation — a 50%+ approval rate, i.e. approval by the majority of the network."
},
{
  id: "u1n11",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "fib",
  q: "Per the lecture, a transaction is considered valid only if it secures a ______%+ approval rate from the network.",
  answer: ["50", "fifty", "50 percent", "50%"],
  explain: "Full nodes validate independently; a majority (50%+) approval rate is the bar stated in the lecture."
},
{
  id: "u1n12",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "fib",
  q: "A partial node is also known as a light node or an ______ node (Simplified Payment Verification).",
  answer: ["spv", "s.p.v", "spv node", "simplified payment verification"],
  explain: "SPV stands for Simplified Payment Verification — it proves inclusion instead of validating the entire chain."
},
{
  id: "u1n13",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "mcq",
  q: "Instead of downloading the whole blockchain, a partial node downloads only:",
  options: [
    "Block headers, roughly 80 bytes per block",
    "The last 1,000 transactions",
    "A compressed image of the chain",
    "Nothing at all — it relies on its bank's records"
  ],
  answer: 0,
  explain: "Headers of about 80 bytes per block are enough for proofs of inclusion, making the stored chain roughly 1,000× smaller than a full node's."
},
{
  id: "u1n14",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "fib",
  q: "Storing only block headers makes a partial node's copy of the chain roughly ______ times smaller than a full node's.",
  answer: ["1000", "1,000", "thousand", "1000 times"],
  explain: "About 80 bytes per header versus full transaction data, so the stored chain is roughly 1,000× smaller."
},
{
  id: "u1n15",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "msq",
  q: "Which statements about how a partial node propagates a transaction it holds are correct?",
  options: [
    "It first announces with an inv message that it holds the transaction",
    "A full node requests the full transaction with getdata",
    "It then serves the complete transaction (tx)",
    "Transactions pushed without this handshake are ignored by the network",
    "It must download the entire blockchain before sending anything"
  ],
  answer: [0, 1, 2, 3],
  explain: "The three-step inv → getdata → tx handshake governs propagation; unsolicited pushes that skip it are ignored."
},
{
  id: "u1n16",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "mcq",
  q: "How does a partial node verify that its own transaction is really inside a block?",
  options: [
    "By checking a Merkle path/proof of inclusion",
    "By decrypting and reading every transaction in the block",
    "By asking the miner to confirm it privately",
    "By reading the coinbase transaction"
  ],
  answer: 0,
  explain: "The Merkle proof demonstrates the transaction is in the block without validating every other transaction."
},
{
  id: "u1n17",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "mcq",
  q: "In practice, a partial node waits for about how many confirmations before treating a transaction as secure?",
  options: ["1", "3", "6", "100"],
  answer: 2,
  explain: "Around 6 confirmations — blocks piled on top — is the practical rule before treating the transaction as final."
},
{
  id: "u1n18",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "fib",
  q: "The deeper a block sits in the chain, the more ______ proof-of-work an attacker would need to overwrite it.",
  answer: ["cumulative", "cumulative work", "total", "more", "cumulative hash"],
  explain: "Each added block piles on more work, so reversing a deep transaction (a double spend) is exponentially harder."
},
{
  id: "u1n19",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "msq",
  q: "Which are limitations of a partial node?",
  options: [
    "It cannot detect fabricated transactions if an attacker overpowers the network",
    "A full node can lie by omission, claiming a transaction does not exist",
    "It offers weaker privacy because full nodes can see which addresses it queries",
    "It must store the complete blockchain",
    "It has no way to prove its transaction is in a block"
  ],
  answer: [0, 1, 2],
  explain: "Partial nodes trust proofs and depth, so they can be fooled by a dominant attacker or a lying full node, and leak interest through queries."
},
{
  id: "u1n20",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "mcq",
  q: "Why is the recommended mitigation for a partial node's limitations to connect to several full nodes?",
  options: [
    "So that at least one honest node is likely to answer correctly, defeating a full node's lie by omission",
    "To increase storage on the partial node",
    "To speed up its block header downloads",
    "To let it mine blocks as well"
  ],
  answer: 0,
  explain: "Connecting to several full nodes raises the chance that an honest one reports the truth instead of omitting the transaction."
},
{
  id: "u1n21",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "fib",
  q: "Weaker privacy for partial nodes — full nodes can see which addresses they query — is mitigated with probabilistic ______ filters (BIP-37).",
  answer: ["bloom", "bloom filter", "blooms", "bloom filters"],
  explain: "BIP-37 probabilistic Bloom filters let a node ask for 'transactions I might own' without revealing the exact addresses."
},
{
  id: "u1n22",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "mcq",
  q: "The notes recommend partial nodes for which situation?",
  options: [
    "Resource-limited environments such as mobile wallets",
    "A full archival copy kept by a national bank",
    "A mining pool that needs the whole chain",
    "A certificate authority directory"
  ],
  answer: 0,
  explain: "Where storage, bandwidth and computing power are limited, the 1,000× smaller header-only chain makes a partial node the practical choice."
},
{
  id: "u1n23",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "msq",
  q: "What do both full nodes and partial nodes do?",
  options: [
    "Join the peer-to-peer network",
    "Propagate transactions to other nodes",
    "Have at least one thing to verify before trusting a transaction",
    "Only a full node can relay data to peers",
    "Both must download the entire blockchain"
  ],
  answer: [0, 1, 2],
  explain: "Both take part in the P2P network, relay transactions and check something before trusting it — full nodes validate everything, partial nodes check a Merkle proof plus depth."
},
{
  id: "u1n24",
  unit: 1,
  topic: "Peer-to-Peer Networks",
  type: "fib",
  q: "Nodes are of two types: Full Node and ______ Node (also called light / SPV).",
  answer: ["partial", "partial node"],
  explain: "The notes define the two node types as full nodes and partial (light/SPV) nodes."
},

/* ================= HASH ================= */
{
  id: "u1n25",
  unit: 1,
  topic: "Hash Functions",
  type: "mcq",
  q: "According to the notes, a hash function converts human-readable data into:",
  options: [
    "Unreadable text of a fixed form",
    "A longer, more detailed version of the same text",
    "A readable summary that can be edited",
    "A compressed audio file"
  ],
  answer: 0,
  explain: "Hashing turns human-readable format into unreadable text, so the raw data is not sitting in plain view inside the ledger."
},
{
  id: "u1n26",
  unit: 1,
  topic: "Hash Functions",
  type: "fib",
  q: "If a hashed message is tampered with, the original message ______ be derived back out.",
  answer: ["cannot", "can't", "can not", "cannot be", "cannot be derived"],
  explain: "Hashing is one-way, so an altered message cannot be reversed to recover the original — which is exactly what makes tampering detectable."
},
{
  id: "u1n27",
  unit: 1,
  topic: "Hash Functions",
  type: "msq",
  q: "Why do the notes call hashed ledger data tamper-proof?",
  options: [
    "Any change to the data changes its hash, so the change is detectable",
    "The original message cannot be derived from the altered hash",
    "Recoverability of the original data is destroyed by the alteration",
    "The hash can be unscrambled with a key stored inside the block",
    "The plaintext is never stored anywhere in the chain"
  ],
  answer: [0, 1, 2],
  explain: "Tamper-evidence comes from the avalanche effect plus one-wayness, not from encryption — hashes are not decryptable with a key."
},
{
  id: "u1n28",
  unit: 1,
  topic: "Hash Functions",
  type: "mcq",
  q: "Why does hashing every ledger entry make tampering with a transaction detectable?",
  options: [
    "Tampering changes the hash, so the new hash no longer matches what the chain already recorded",
    "The hash hides the transaction from all validators",
    "The hash locks the file with a password",
    "The hash is stored twice in two different databases"
  ],
  answer: 0,
  explain: "Nodes recompute hashes and compare; a mismatch is immediate proof that the record was altered."
},
{
  id: "u1n29",
  unit: 1,
  topic: "Hash Functions",
  type: "fib",
  q: "In the notes, every piece of data in a ledger is passed through a ______ function.",
  answer: ["hash", "hashing", "a hash", "hash function"],
  explain: "Every ledger entry is protected by a hash function, which is what makes the recorded data tamper-proof."
},

/* ================= MINING & MINERS ================= */
{
  id: "u1n30",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "fib",
  q: "A new block in the blockchain is added via a ______.",
  answer: ["miner", "a miner", "the miner", "mining"],
  explain: "A new block enters the chain through a miner who performs the work needed to append it."
},
{
  id: "u1n31",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "fib",
  q: "The heavy computation a miner performs in order to add a new block is called ______.",
  answer: ["mining", "mine", "the mining"],
  explain: "Mining is the heavy computation required before a new block can be added to the blockchain."
},
{
  id: "u1n32",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "mcq",
  q: "In return for mining a block, a miner is rewarded with:",
  options: [
    "The particular cryptocurrency for which that block was mined",
    "A salary paid by the central bank",
    "A discount on transaction fees forever",
    "Nothing — mining is unpaid volunteering"
  ],
  answer: 0,
  explain: "The reward is paid in the cryptocurrency of the chain the block was mined for, which is what keeps miners competing honestly."
},
{
  id: "u1n33",
  unit: 1,
  topic: "Blocks & Chain Structure",
  type: "msq",
  q: "Which statements about mining are correct according to the notes?",
  options: [
    "A new block is added to the blockchain via a miner",
    "Mining means performing the heavy computation needed to add a new block",
    "The miner is rewarded with the cryptocurrency the block was mined for",
    "Any participant can append a block without doing the computation",
    "Mining removes the need for transaction verification"
  ],
  answer: [0, 1, 2],
  explain: "Miner = does the heavy work to add a block and is paid in that chain's cryptocurrency. Blocks cannot be appended for free, and mining strengthens rather than replaces verification."
},

/* ================= TYPES OF BLOCKCHAIN ================= */
{
  id: "u1n34",
  unit: 1,
  topic: "Blockchain Types",
  type: "msq",
  q: "Which are true of a public blockchain?",
  options: [
    "Anyone can join the connection at any time they want",
    "Participants must spend time verifying transactions",
    "So many nodes take part that verification takes a long time",
    "A single head entity controls who may join",
    "Verification is restricted to a trusted group"
  ],
  answer: [0, 1, 2],
  explain: "Public = open joining in exchange for verification effort by everyone, which is why confirmation is slow. Head-entity control and trusted-group verification belong to private/consortium chains."
},
{
  id: "u1n35",
  unit: 1,
  topic: "Blockchain Types",
  type: "msq",
  q: "Which are true of a private blockchain?",
  options: [
    "Only one single entity — the head/central entity — can grant access",
    "Only the head entity has the power to admit a new entity",
    "Access is fully controlled and centralized",
    "Because the network is small and controlled, verification is blazingly fast",
    "Anyone can join at any time without permission"
  ],
  answer: [0, 1, 2, 3],
  explain: "Private chain: one head entity hands out all access, so the network stays small and fast. Open joining is not a feature of it."
},
{
  id: "u1n36",
  unit: 1,
  topic: "Blockchain Types",
  type: "msq",
  q: "Which are true of a consortium blockchain?",
  options: [
    "Any user can join at any time and make a transaction",
    "Users do not have the authority to verify other transactions",
    "Verification is restricted to a selected group of trusted nodes",
    "Transaction speed is faster than a public blockchain, similar to a private one",
    "Ordinary users verify every transaction they can see"
  ],
  answer: [0, 1, 2, 3],
  explain: "Consortium = open to transact, but only a trusted subset verifies. Fewer verifiers is why it beats public on speed."
},
{
  id: "u1n37",
  unit: 1,
  topic: "Blockchain Types",
  type: "fib",
  q: "In a private blockchain, only one single entity — the ______ / central entity — has the power to grant access.",
  answer: ["head", "head entity", "central", "head/central", "central entity"],
  explain: "The head (central) entity alone controls entry, which makes the network small, controlled and fast."
},
{
  id: "u1n38",
  unit: 1,
  topic: "Blockchain Types",
  type: "fib",
  q: "In a consortium blockchain, verification is restricted to a selected group of ______ nodes.",
  answer: ["trusted", "trusted group", "chosen", "selected trusted", "authorised", "authorized"],
  explain: "Ordinary users may transact but may not verify; only a selected group of trusted nodes does that."
},
{
  id: "u1n39",
  unit: 1,
  topic: "Blockchain Types",
  type: "mcq",
  q: "Which blockchain type does the notes describe as \"blazingly fast\" for transaction verification?",
  options: ["Public", "Private", "Consortium", "All three are equally fast"],
  answer: 1,
  explain: "Private networks are small and controlled, so verification is described as blazingly fast."
},
{
  id: "u1n40",
  unit: 1,
  topic: "Blockchain Types",
  type: "mcq",
  q: "Why is transaction verification slow on a public blockchain?",
  options: [
    "Because so many nodes take part in verification",
    "Because the head entity approves each transaction one by one",
    "Because only a trusted group is allowed to verify",
    "Because every transaction must be printed on paper"
  ],
  answer: 0,
  explain: "Open participation means many verifiers, so reaching agreement takes a long time — the trade-off for decentralization."
},
{
  id: "u1n41",
  unit: 1,
  topic: "Blockchain Types",
  type: "fib",
  q: "The blockchain type where anyone may transact but only trusted nodes verify is a ______ blockchain.",
  answer: ["consortium", "federated", "consortium/federated"],
  explain: "Consortium chain: access to transacting is open, but verification authority is restricted to a trusted group."
},
{
  id: "u1n42",
  unit: 1,
  topic: "Blockchain Types",
  type: "mcq",
  q: "Matching the notes' comparison table — who verifies transactions on a private blockchain?",
  options: [
    "The head entity only",
    "All participants",
    "A selected group of trusted nodes",
    "Ordinary users who transact"
  ],
  answer: 0,
  explain: "Public: all participants. Private: head entity only. Consortium: a trusted group, not ordinary users."
},
{
  id: "u1n43",
  unit: 1,
  topic: "Blockchain Types",
  type: "mcq",
  q: "Matching the same table — who verifies transactions on a public blockchain?",
  options: [
    "All participants",
    "The head entity only",
    "A selected group of trusted nodes",
    "Nobody; transactions are self-certified"
  ],
  answer: 0,
  explain: "Everyone who joins takes part in verifying, which is precisely why public chains are the slowest of the three."
},
{
  id: "u1n44",
  unit: 1,
  topic: "Blockchain Types",
  type: "mcq",
  q: "Which combination of access and verifier is correct for a consortium blockchain?",
  options: [
    "Anyone can transact; a trusted group verifies",
    "Only the head entity joins; it also verifies",
    "Anyone joins and verifies; no trusted group exists",
    "Only a trusted group may transact at all"
  ],
  answer: 0,
  explain: "This is the distinguishing feature of a consortium chain: open transacting, restricted verification."
}
);
