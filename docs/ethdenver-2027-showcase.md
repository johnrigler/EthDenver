# ETHDenver showcase: Zorkmid, Lantern, Chisel, Dark Star, and Nob Hill Darts

Status: planning, 2026-10-11. No confirmed 2027 conference dates, speaker slot, venue, deployed Zorkmid contract, token claim system, or physical board. This is an independent prepared demonstration, **not a hackathon submission**.

## Thesis

A public ledger is not merely a financial account book. Addresses, signed events, compact encodings and content-addressed artifacts form a user-controlled publishing medium. Demonstrate the thesis through working interactions rather than token promotion.

## Conference tracks

1. **Technical talk / panel proposal:** "The Address Is the Index: Human-Readable Ledgers Beyond Finance." Show actual Chisel records, optional M64, IPFS retrieval, Lantern, and physical signed events. Submit to appropriate conference calls when published; do not assert acceptance.
2. **Independent demo:** Public read-only demos of Lantern and Chisel, plus a Zorkmid claim flow only once secure and tested. Prepare a three-minute offline video and a working live link.
3. **Off-site Nob Hill Darts:** Nerd Coffee LLC project. Preserve current ownership: Shannon coordinates; John handles Chisel development and Denver outreach. Venue and permissions unconfirmed. Bar players and remote viewers see the same game; viewing requires no wallet.
4. **Print distribution:** Zorkmid QR cards, one-page architecture explainer, optional Dark Star booklet. Cards should lead first to a useful experience, with an optional wallet claim; never print a claim URL before it's deployed and tested.

## Zorkmid design candidate

Proposed ZORK on Base, conventional fixed-supply OpenZeppelin ERC-20: 99,000,000,000 units and 9 decimals (EVM uint256 fits). No deployed mint is asserted. Mint fixed treasury allocation and revoke mint authority or use immutable initial mint; assess implications before mainnet. Publish source, ABI, chain ID, verified contract and treasury wallets. No guaranteed price, liquidity, exchange listing, investor return, or token reward. Airdrop to interested, consenting participants, ideally claim-based; do not scrape wallets for spam transfers.

Separation: core token contract; Chisel-compatible etch/event companion; artifact/identity registry; tightly limited agent-authorized operations. M64, Gomez, Jethro, and ASC integrations are experiments, not claimed implemented. Avoid arbitrary-call executors, unbounded on-chain data, or user private keys in browser content. Test on Base Sepolia first; benchmark against Polygon Amoy before locking chain selection. Do not represent standard contract events as permanent EVM state.

## Portable dartboard prototype

Select used soft-tip electronic board after circuit inspection (working target budget ~$50-100 used, not a quotation), ESP32 (~$8-15), wiring (~$10-20), mounting (~$15-30): planning subtotal ~$83-165 before taxes, travel, spare segments, power, gas, and safety costs. Most cheap boards expose a switch matrix internally, not a documented API. Do not assume any model can be tapped without electrical inspection.

Target flow: sensor -> debounce/scoring and offline event log -> signed game report -> live HTTP feed -> retained completed artifact / optional ledger anchor -> public QR viewer. Keep game playable offline. Distinguish measured hit, manual correction, controller signature, confirmed chain record and retained IPFS artifact. The device key authenticates a device report, not physical truth. Prefer per-game anchoring to per-dart gas cost; no wagering, prizes based on chance, or forced wallet sign-in.

## Print handoff

**Card front:** ZORKMID | A CURRENCY FOR ANOTHER WORLD | Play Lantern. Explore the ledger. Claim optional ZORK.

**Card back:** QR -> a stable project landing page, not a direct unsolicited transaction. Show actual contract address, chain, supply policy and wallet risks once deployment exists. Optional unique claim codes cannot alone secure valuable claims without server/contract-side one-use redemption.

**One-pager:** thesis; simple architecture (board / Lantern -> signed artifact -> IPFS and ledger -> Chisel viewer; optional ZORK claim on Base); three real demo URLs and verified deployment metadata; disclosure of exploratory status and no investment promise.

## Milestone gates

- G0: working existing Lantern/Chisel URLs, final narrative, conference requirements and collaborators verified.
- G1: used board acquired, segment input proven, scoring and reboot recovery verified; web viewer works without wallet.
- G2: signed reports, independent verification, stable IDs, offline queue, final artifact retrievability.
- G3: Base Sepolia ZORK + companion contracts audited at prototype level, claim flow and gas funding rehearsed. Do not mainnet deploy by default.
- G4: venue consent, safety, power/network, travel and speaking/demo applications confirmed.
- G5: print proofs, real QR destination, spare hardware, failure-mode rehearsal, clear visitor metrics (scans, voluntary claims, repeat visits, Lantern sessions).

## Cross-repository ownership

- `EthDenver`: coordination, speaker abstract, field event, hardware and printed materials.
- `chisel`: ledger publication/reading, identity and encoding integration; optional Base connector.
- `lantern`: playable entry, optional ZORK claims and game rewards with no wallet prerequisite.
- `darkStar`: booklet and print invitation to the world, not a financial pitch.
- `sbstats`: acquisition and participation analytics, keep external organic engagement distinct from bot activity.
- `Gomez`: prior EVM contract experiment, study compatibility rather than rewriting it.
- `ledgerdice`: optional reusable event/physical game patterns, not the primary dartboard implementation.

## Metrics and safeguards

Count cards, scans, opt-in claims, distinct voluntarily active wallets, visitors who played, repeat activity, and signed game artifacts. Track agents as agents; do not create fake endorsements, fake holders, or wash volume. No seed phrases/private keys on printed cards. Do not conflate transaction volume with adoption.
