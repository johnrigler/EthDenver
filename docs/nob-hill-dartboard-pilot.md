# Nob Hill dartboard / ETHDenver outside-event pilot

Planning note: 2026-10-07. This is a proposed build and independently organized outside event. Hardware, venue arrangements, convention-floor access, and event dates are not yet established.

## The physical connection

John plans to spend up to one week in Denver, moving between the ETHDenver hacker floor and a local bar. Interested builders can join Denver regulars in the bar, and both locations can display the same activity. The hacker floor recruits collaborators and hosts a receiver/viewer; the bar hosts the game.

Nob Hill Inn is the proposed venue because John discussed early Chisel ideas with people there, including publishing dart scores. His recollection is that Tobo showed him how to involve people from the hacker floor. These are the project's origin accounts, rather than commitments by those people or venues.

The shared activity is a game on an electronic soft-tip dartboard: plastic-tipped darts hit segmented targets, and the board registers the hits. The board becomes a first-class participant in the Chisel/Mogwai universe, with its own public identity, reporting key, and event history.

Bar regulars and visiting builders play, inspect the hardware, view the reports, and discover the same recorded evening. The project also offers Albuquerque colleges and makerspaces something tangible to build before the Denver demonstration and maintain afterward.

## Device identity and its history

Keep these identities distinguishable: the physical dartboard, its venue, each game session, and any participating player who chooses a signing identity.

The board's public record should include its public key and signature algorithm, an enrollment record linking that key to the inspected board, a readable name, and a QR entry point. A human-readable label/index helps people find the object; it is not a secret signing key.

Publish venue-assignment, calibration, firmware-update, maintenance, and key-replacement records as explicit events. Keep the old history when replacing hardware. A repair or replacement should not silently impersonate the original board.

Generate and protect the device reporting key within the board's electronics where practical. A Raspberry Pi file containing a private key is a software-key prototype; that alone does not establish that the key cannot be copied. A suitably configured secure element can improve key protection. Enrollment and physical inspection establish why readers associate a key with this particular board.

### What a signed report establishes

A valid signature establishes that the enrolled key authorized the signed bytes. Confidence in those bytes as an account of the game also depends on the input matrix, sensor calibration, scoring code, access to the enclosure, and the firmware allowed to use the key.

For example, modified firmware can request a signature for an invented score even when the private key is non-exportable. Contact faults can register an incorrect hit. Physical switches can be pressed without a thrown dart. Preserve the distinction between signature verification and judging the measurement's reliability.

For the pilot, compare observed throws against the raw inputs and reported scores, identify the firmware build, record calibration, and let observers inspect the setup. A firmware version string is self-reported metadata unless backed by a measured or verified boot process. Stronger attestation is a later, separate engineering task; IETF RFC 9334 provides the relevant architecture [1].

### Device reporting key and chain transaction key

The device reporting key signs game artifacts. A separately funded Chisel publisher may pay for the blockchain transactions that carry or anchor those artifacts. The publisher preserves the original device signature, so readers can verify the board's report independently of who paid the fee.

The ATECC608B family is a hardware-signing candidate to evaluate, not selected hardware. Microchip documents P-256 public keys for its ATECC608B-TFLXTLS [2]. P-256 is a different curve from secp256k1, used by Chisel's UTXO/EVM transaction-signing path; the [Bitcoin wallet documentation](https://developer.bitcoin.org/devguide/wallets.html#private-key-formats) describes secp256k1 in its wallet-key format. Do not assume this chip can hold and sign directly with Chisel's chain spending key. Select the reporting algorithm and verify support on both the hardware and browser before purchase.

## Proposed data paths

| Path | Flow | Purpose |
| --- | --- | --- |
| Local game | Target contacts → input adapter → scoring engine → local display and durable event log | Keep the game usable while connectivity is unavailable. |
| First integrated build | Signed device artifact → USB/Ethernet/Wi-Fi relay → viewer and Chisel publisher | Validate inputs, signature verification, and publication with readily available transport. |
| Optional radio demonstration | Signed device artifact → LoRa radio → convention receiver → viewer and Chisel publisher | Carry the bar's report to the hacker floor over a measured radio link. |
| Nearby mesh option | Signed device artifact → Zigbee network → local bridge | Explore connecting nearby devices around a venue or makerspace. |

The public viewer should use vanilla HTML/CSS/JavaScript and be distributable as static files on IPFS. A Pi hardware adapter or relay may use Python or C where direct hardware access requires it. No Node.js server is assumed for the public viewer.

### LoRa and Zigbee

LoRa is the optional transport experiment. For a direct bar-to-convention link, test point-to-point LoRa with a radio at each end. Establish reception, antenna placement, packet delivery, and latency at the actual locations before promising the route.

LoRaWAN is a distinct architecture: an end device reaches a gateway, which forwards to a network server and application server [3]. A LoRaWAN deployment therefore needs the appropriate gateway, server, and backhaul arrangement. Identify the radio path and any Internet path explicitly when demonstrating it.

Zigbee offers mesh networking [4] and can be evaluated for nearby boards and controllers. Treat a cross-city link as something to measure rather than assuming a local mesh covers the distance.

Start radio work with a signed match result. Determine the chosen region/data-rate profile's payload limit and airtime, including the signature and framing, before attempting per-dart transmission. Add message IDs, fragment reassembly if needed, retry handling, and duplicate suppression. Keep a local queue during outages.

The application signature survives changes in transport. A relay can forward an intact signed report, but it must not rewrite the score and still present it as the original board-signed artifact. Radio transport authentication and public application-signature verification are different functions.

## Draft event envelope

The following JSON is an illustrative schema proposal, not a valid signed artifact or an implemented protocol:

```json
{
  "payload": {
    "protocol": "chisel.device-event",
    "version": 1,
    "device_id": "<enrolled-public-key-fingerprint>",
    "venue_id": "<venue-identity>",
    "session_id": "<unique-game-session>",
    "sequence": 42,
    "previous_event_hash": "<previous-payload-hash-or-null>",
    "kind": "dart.hit",
    "observed_at": "<device-reported-time>",
    "firmware_hash": "<reported-firmware-build-hash>",
    "calibration_id": "<calibration-record-reference>",
    "data": {
      "player": "<session-player-alias>",
      "segment": 20,
      "multiplier": 3,
      "points": 60
    }
  },
  "signature": {
    "algorithm": "<selected-signature-algorithm>",
    "key_id": "<enrolled-reporting-key>",
    "value": "<encoded-signature>"
  }
}
```

Before implementation, specify public-key encoding, fingerprint derivation, signature encoding, canonical bytes, and the exact meaning of every event. Use a protocol/version domain separator for signing. JSON Canonicalization Scheme (RFC 8785) is one possible basis for reproducible bytes [5]; ordinary JSON.stringify on arbitrary objects is not a complete signing specification.

Specify bounded integer fields and reject malformed data. Use an unpredictable session ID/nonce and sequence numbers, persisted across recovery, to identify repeated or out-of-order events. Receivers should track duplicates by the canonical payload hash or device/session/sequence, not signature bytes alone. A restarted game needs an explicit session-start record; do not silently reset the sequence within a session.

Record raw contact observations alongside scored hits where practical. Distinguish genuine hits, missed throws, corrections, game completion, and maintenance events. A miss may require manual entry; a target-contact board cannot observe every throw that misses it. Corrections should reference the original record and append a new event rather than rewriting the signed history.

Device timestamps describe the board's clock. Receipt time and ledger inclusion are separate observations; neither turns an untrusted device clock into proof of the exact throw time.

## Publishing and reading through Chisel

Render live local events immediately. Show receipt, signature verification, and ledger publication as separate states. The game should not wait for a blockchain confirmation before updating its score.

Start with one finished-game artifact and a durable local event log. If the artifact fits the selected chain's supported data path, publish it directly. Otherwise retain the complete signed artifact on IPFS and put its content reference/hash on the ledger. Keep an explicit pinning/retention plan and an export copy; a content hash alone does not ensure someone still serves the bytes.

Use Chisel's identity and human-readable index conventions to find the board and game histories. Verify the artifact, its enrolled reporting key, and the ledger anchor when presenting an entry as verified. An anchor for a digest does not establish that the device signature or the sensor report was checked.

Batch per-dart logs later if measurement, payload size, and transaction costs justify it. The initial build can publish a match result while keeping detailed observations available for inspection.

## Albuquerque participation

Invite small teams to contribute independently:

| Contribution | Concrete deliverable |
| --- | --- |
| Electronics | Identify a soft-tip board's input interface, read target contacts, and document wiring and voltage/interface compatibility. |
| Embedded programming | Input debouncing, target mapping, scoring, session/sequence handling, and durable logs. |
| Cryptography | Enroll a reporting key, sign canonical events, and verify them in an independent viewer. |
| Radio/networking | Test LoRa delivery between the intended sites; evaluate Zigbee if a local mesh is useful. |
| Fabrication | Maintainable enclosure, mounting, service access, labels, and QR identification. |
| Web/ledger | Vanilla-JavaScript viewer, Chisel publication, and retrieval of signed game artifacts. |
| Community observation | Run games, compare physical play with reports, and document what players find useful. |

Potential starting points are CNM/FUSE Makerspace [6], Quelab [7], and interested UNM engineering/computing students and makerspace participants [8]. These are candidates to approach, not confirmed partners. Hold the initial development sessions in Albuquerque; remote participation can connect campus/makerspace teams with the Denver demonstration.

Existing arcade and pinball machines can later use the same device-identity/event model. Start with one dartboard so teams can inspect the complete physical-to-ledger path.

## Build and demonstration milestones

1. Identify an available electronic soft-tip board, its interface, the proposed bar operator, and possible Albuquerque collaborators.
2. Read and log physical target contacts; verify sector/multiplier mapping and correct duplicate contact handling.
3. Generate/enroll a reporting identity and produce one signed completed-game artifact; verify it independently.
4. Publish one artifact or its retained IPFS reference through Chisel; retrieve it by the board identity from another device.
5. Display the same session at the bar and hacker-floor receiver, distinguishing live reception from confirmed publication.
6. Add a measured LoRa route as an optional extension. Keep the working local/Internet path available if the radio route fails.
7. Run an Albuquerque build session, then arrange a Denver demonstration and follow-up with the local venue.

Verification for the actual build should cover observed hit versus reported hit, input bounce, scoring corrections, altered signatures/payloads, replayed or reordered events, radio loss, reboot recovery, and independent retrieval after the live display is closed. This document adds planning only; no hardware or software implementation has been tested by writing it.

## Outside-event format

John recruits interested participants from the hacker floor, meets bar regulars at the venue, and moves between both locations. The receiver gives visitors a visible link to an activity taking place in Denver. Joint sessions let visitors and regulars inspect the same game, report, and publication.

Possible formats are an informal demonstration, a scheduled build/show-and-tell session, and a pub game evening. Arrange the bar's participation and any receiver space with the respective operators. Use event language that accurately identifies the independent outside event; use confirmed dates when they are available.

Success is a working board-to-record path that participants can inspect, plus enough local interest to run another session after convention week. Capture maintenance notes, what failed, and what players actually used.

## References and project leads

1. [IETF RFC 9334: RATS architecture](https://www.rfc-editor.org/rfc/rfc9334.html) — device evidence and appraisal of trustworthiness.
2. [Microchip ATECC608B-TFLXTLS public-key formats](https://onlinedocs.microchip.com/oxy/GUID-8F01540E-14A9-479E-9D27-FFFB14DE474E-en-US-2/GUID-09B8AC7B-0557-4D9A-B5C6-5E2455D04E74.html) and [Secure Boot](https://onlinedocs.microchip.com/oxy/GUID-8F01540E-14A9-479E-9D27-FFFB14DE474E-en-US-2/GUID-6841BE8E-E027-4773-B172-EB31F5B141DE.html) — P-256 and supported boot/key-use configuration.
3. [The Things Network: LoRaWAN architecture](https://www.thethingsnetwork.org/docs/lorawan/architecture/) — end devices, gateways, servers, and backhaul.
4. [Connectivity Standards Alliance: Zigbee](https://csa-iot.org/all-solutions/zigbee/) — mesh transport reference.
5. [IETF RFC 8785: JSON Canonicalization Scheme](https://www.rfc-editor.org/rfc/rfc8785.html) — repeatable representation for hashes and signatures.
6. [CNM: FUSE Makerspace](https://www.cnm.edu/locations/fuse-makerspace) — community fabrication and workshop starting point.
7. [Quelab](https://quelab.net/) — Albuquerque hackerspace starting point.
8. [UNM IT makerspaces](https://it.unm.edu/academic-tech/it-makerspace.html) — student/staff/faculty collaboration and fabrication resources, with the site's access conditions.

[flotwig/Pi-Dartboard](https://github.com/flotwig/Pi-Dartboard) is a hardware reference to inspect: its author describes using an existing electronic board casing, a Raspberry Pi, and GPIO hit detection. Its model, interface, maintenance status, and license need checking before any code or wiring is adopted. No dependency has been selected or imported.
