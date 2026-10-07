# EthDenver

## Nob Hill Darts: a Chisel project

An electronic soft-tip dartboard reports its own games through Chisel. People at a Denver bar, on the ETHDenver hacker floor, and anywhere online can follow the same game through a dedicated **Nob Hill Darts** page and return to its recorded history afterward.

The project gives visiting builders and Denver regulars a physical activity to share. Albuquerque colleges, hackerspaces, and makerspaces can help build and test the equipment before the Denver demonstration.

**Status, 7 October 2026:** project definition and pitch. The hardware and new viewer are proposed, with no implemented pilot claimed. Nob Hill Inn is the proposed bar. Venue participation, ETHDenver dates, any hacker-floor setup, collaborators, budget, and build schedule remain to be arranged. This is an independently organized outside event.

## The experience

Plastic-tipped darts hit the board's target segments. A Raspberry Pi or microcontroller reads the contacts, maintains the game, and records events. The board has its own enrolled public identity and reporting key. It is a first-class participant with a history of games, calibration, firmware changes, repairs, and key replacement.

The public page shows the current game, player aliases, scores, recent throws, connection freshness, and previous games. **Watching requires no account, wallet, or cryptocurrency.** A spectator who wants to sign or write a contribution can choose **Open in Chisel**, carrying the selected board and game into that workflow.

John Rigler plans to spend up to one week in Denver, moving between the hacker floor and the bar to involve visiting builders and local players. Participants at both locations inspect the same game and its record. Online spectators receive the same reports as connectivity allows.

## Components and responsibilities

| Component | Responsibility |
| --- | --- |
| Electronic soft-tip board | Register target contacts and provide a maintainable physical game. |
| Pi or microcontroller | Debounce inputs, apply scoring rules, keep a durable local log, and sign reports with the enrolled device key. |
| Relay and Chisel publisher | Preserve the original device signature, expose a public read feed, and publish a completed-game artifact or retained content reference. |
| Ledger and retained artifacts | Keep the publication record and make the complete signed game available for later retrieval. IPFS content needs an explicit retention/pinning plan. |
| Nob Hill Darts page | Display live games and history, verify signed reports, and distinguish current reception from ledger confirmation. |
| Chisel interactive interface | Support optional human signing, writing, and publication with the selected board/game context. |

Build the viewer with vanilla HTML/CSS/JavaScript suitable for static distribution on IPFS. Inspect and reuse or extract the applicable Chisel/Mogwai identity, record-reading, decoding, and verification helpers. A stable shared API is an implementation task, not an assumed existing interface. Python or C can support direct hardware access on the Pi or controller.

A device signature authenticates the enrolled key's report. Confidence in the physical score also depends on sensors, scoring code, firmware, and access to the board. Keep the reporting key separate from the funded ledger publisher unless the chosen hardware and chain support the same signing requirements.

## First working prototype

Start with **one board, one game format, one signed completed-game artifact, and one public viewer**. Choose the game format after inspecting the available board. Use USB, Ethernet, or Wi-Fi for the initial working connection.

The prototype must keep the local game usable during a connection outage, retain detailed events, and publish the finished game's signed artifact through Chisel. A public read feed can carry live events before ledger confirmation. Use stable board/session/event identifiers to merge live reports with anchored history without counting a report twice.

**Acceptance demonstration:**

1. Observe a real game and compare physical hits with the reported segments and scores. Record misses and corrections explicitly.
2. Verify the completed-game artifact against the board's enrolled public key on another device. Reject an altered report and prevent replayed events from changing the score.
3. Publish through Chisel and retrieve the complete artifact independently after the live display closes.
4. Follow the same game in Nob Hill Darts without a login or wallet, including visible freshness when the feed stops.
5. Recover the local log after a reboot and reconnect without duplicating events.

LoRa is an optional later demonstration between the bar and a convention receiver. Measure the actual route before promising coverage. A point-to-point radio link and a LoRaWAN deployment require different arrangements. Zigbee is an optional nearby mesh experiment. Multiple boards, additional arcade games, and per-dart ledger publication can follow a working first prototype.

## Tasks and milestone gates

Task 1 establishes what the project is and gives a project manager a pitch they can use to organize the build. Subsequent tasks advance when their evidence is available. Dates and spending estimates follow the hardware inventory and assignment of owners.

| Task | Deliverable | Gate for moving forward |
| --- | --- | --- |
| **1. Project outline and pitch** | This README and a PowerPoint pitch, with a [repository outline](docs/project-manager-pitch.md). | A coordinator can explain the purpose, first scope, responsibilities, and requested resources. |
| **2. Board and build group** | A selected board, documented interface, named task owners, and a first build session. | The team can read the inputs and agree on the scoring rules and parts required. |
| **3. Local game and device identity** | A recoverable game log and an independently verifiable signed game. | Observed play matches the log and altered/replayed reports receive correct treatment. |
| **4. Publication and public page** | Chisel publication, retained artifacts, live viewing, and history retrieval. | An independent spectator watches without a wallet and retrieves a finished game later. |
| **5. Rehearsal and event arrangements** | Albuquerque rehearsal, agreed Denver host setup, operating instructions, and confirmed dates. | Hosts and builders can run the demonstration and recover from interruptions. |
| **6. Optional radio** | A measured LoRa route and documented receiver/backhaul arrangement. | The radio works at the intended sites while the baseline connection remains available. |
| **7. Local continuation** | Maintenance notes, ownership of the installed equipment, and a follow-up session. | Denver participants can use the game after convention week. |

Track implementation in [issue #1](https://github.com/johnrigler/EthDenver/issues/1).

## What the project manager coordinates

John is the project coordinator. The build needs named owners for hardware/embedded work, device signatures and Chisel integration, the public page, and venue operations. People can cover more than one role.

The first resource request is a suitable board, a Pi or controller, compatible input electronics and power, an enclosure, test access, and a small build group. The project manager inventories available equipment, estimates remaining purchases and transaction/retention costs, assigns owners, and sets the schedule. Radio parts enter the budget only if the team chooses that extension.

Potential Albuquerque collaborators include CNM/FUSE, Quelab, and interested UNM students or makerspace participants. These are candidates to approach. No organization or venue has committed, and the invitation draft does not mean outreach has been sent.

## Project documents

- [Project-manager pitch outline and speaking notes](docs/project-manager-pitch.md)
- [Technical and outside-event pilot plan](docs/nob-hill-dartboard-pilot.md)
- [College and makerspace invitation draft](docs/college-makerspace-invitation.md)
- [Implementation tracking issue](https://github.com/johnrigler/EthDenver/issues/1)

The existing application files preserve earlier Web3, QR, and ledger experiments. The project outline and pitch add planning materials for this build. They do not change the existing application or establish that the proposed hardware or viewer has been tested.
