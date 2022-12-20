---
sidebar_position: 8
---

# Scoring

### Scoring Mechanism

When messaging nodes join the Soarchain network, they are assigned a score **$$S$$**. Any messaging node that scores higher than the initially assigned score is considered to be a well-functioning node. The reward distribution process is executed according to the score of a messaging node, which is an indicator of how well it has been performing in its correct and honest state. 

When a challenge result is received, the score is updated according to the outcome of the challenge. The score is always kept within the range of 0 to 100, and all nodes start with an initial score of 50. If the challenge was successful, the score is increased by a certain amount based on the current value of the score. If the challenge was unsuccessful, the score is decreased by a different amount also based on the current value of the score.

The calculation of the score and the corresponding increase or decrease is performed using the following formulas:

Let **$$S$$** be the current score, and **$$C$$** be a challenge result indicating whether the score should be increased (**$$C$$**=true) or decreased (**$$C$$**=false).

The increase and decrease factors are calculated as follows:


> $increaseFactor = maxIncreaseFactor * (100 - S) / 100$

> $decreaseFactor = maxDecreaseFactor * S / 100$

where **$$maxIncreaseFactor$$** = 0.5 and **$$maxDecreaseFactor$$** = 0.7 according to the current development network parameters. Note that main network parameters may differ, thus affecting these factors.


The new score is determined based on the outcome of the challenge.
We check the value of the **$$C$$** variable, which represents the outcome of a challenge.
If **$$C$$** is true, it means that the challenge was successful and the score should be increased. 
In that case, we check if the current score (**$$S$$**) is already close to the maximum score (100). If it is, the score is increased by a small amount. If the current score is not close to the maximum, the score is increased by a larger increase factor that was calculated earlier.

If **$$C$$** is false, it means that the challenge was unsuccessful and the score should be decreased. In that case, we check if the current score is already close to the minimum score (0). If it is, the score is decreased by a small amount. If the current score is not close to the minimum, the score is decreased by a larger decrease factor that was calculated earlier.




🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧

### Scoring Formula

ℹ️ This section is currently under work in progress.


🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧
