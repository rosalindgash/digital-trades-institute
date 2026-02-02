## **Module 3: Data Literacy for Non-Technical Professionals**

## **3.1 Reading Charts, Dashboards, and Reports**

Data visualization is powerful—a good chart communicates in seconds what would take paragraphs to explain. But this power can be misused to mislead.

**Common chart types:**

**Bar charts** compare quantities across categories. **Line graphs** show trends over time. **Pie charts** show parts of a whole (best for 2-3 categories). **Scatter plots** show relationships between two variables. **Heatmaps** show intensity across a grid using colors.

**Critical questions to ask any chart:**

What is actually being measured? Is this the metric that matters or a proxy? What time period is shown? What's the baseline and scale? Does the axis start at 0 or artificially high? What data is missing? Who created this and what do they want me to believe?

**Manipulation tactics to watch for:**

Truncated axes start y-axis at 10 instead of 0, making small changes look huge. Exaggerated scale stretches one axis more than the other. Color choices prime your interpretation (red = bad, green = good). Missing context shows only winning timeframes. 3D effects make some bars appear larger. Dual axes with different scales can make unrelated trends appear correlated.

The same data visualized different ways creates different impressions. A bar chart showing sales growth from $100M to $105M looks dramatic if the axis starts at $99M but understated if it starts at 0.

Always ask: Who benefits from my believing this chart the way it's presented?

---

## **3.2 Understanding Datasets Without Coding**

A dataset is information organized in a table. But a table is never neutral—it reflects choices about what to measure and who to include.

**Dataset anatomy:** Rows are individual records (one customer, one transaction). Columns are attributes (age, purchase amount, region). Data types vary: numbers can be averaged and graphed; categories can be counted and grouped; dates can be sorted and analyzed for trends.

**The representation question:** A dataset of customer ratings is only valuable if you know who provided them. Did only satisfied customers respond? Does the age range match all customers? Is this data from one season or year-round? Were responses voluntary (biasing toward extremes)?

**Watch for:**
- **Selection bias:** Only certain people responded
- **Demographic skew:** Sample doesn't match overall population
- **Temporal bias:** Data from specific timeframe, not representative
- **Voluntary bias:** Volunteers tend to be more extreme

**Real example:** A company analyzes "employee productivity data." The dataset includes hours logged, emails sent, meetings attended. Missing: actual work quality, impact on goals. Hours logged doesn't mean productivity. Result: data-driven conclusions might be completely wrong.

**Metadata matters:** Information about data (when collected, who collected it, definitions, known errors, update frequency) is as important as the data itself. "Sales data Q1 2024 from 42 retail locations (NY, CA, TX only), excludes online sales, missing data Jan 10-15 due to system outage."

Always ask: How was data collected? Who's included? What's the sample size? When? What definitions are used? What's missing?

---

## **3.3 Asking the Right Questions of Data**

**Four question types require different data:**

**Descriptive:** "What happened?" (counts, totals, averages). You're describing the current state.

**Diagnostic:** "Why?" (comparisons across groups). You're looking for patterns.

**Predictive:** "What will happen?" (extending historical patterns forward). Predictions are estimates, often wrong.

**Prescriptive:** "What should we do?" (combining analysis with human judgment). This is where humans must decide.

**The correlation vs. causation problem is the #1 misunderstanding.**

**Correlation:** Two things change together. **Causation:** One causes the other. Correlation never proves causation.

Ice cream sales and drowning deaths both increase in summer. Correlation: yes. Causation: no. Heat causes both.

Companies with more social media followers have higher revenue. Correlation: yes. Causation: unclear. Maybe larger companies have both.

**Think about causation with four tests:** Does timing make sense (cause before effect)? Is there a logical mechanism (how would A cause B)? Are there alternative explanations? Has this been tested experimentally?

**Comparison gives data meaning.** "Our satisfaction is 4.2 out of 5" tells you almost nothing. Compare to: past performance (improving?), competitors (better or worse?), targets (succeeding?), subgroups (equal satisfaction?).

An isolated number has no meaning. Its comparison is what makes it useful.

---

## **3.4 Knowing When Numbers Lie**

Numbers have a reputation for objectivity, but they're easily manipulated.

**Five common tricks:**

**Selective data:** Show only data that supports your point; hide data that doesn't.

**Misleading percentages:** "300% increase" sounds amazing (actually just 1 to 3 units). "5% growth" sounds modest ($50M in a billion-dollar company).

**Aggregating unlike groups:** Combining data from different groups and reversing the truth. Group A: new approach succeeds 90%. Group B: new approach succeeds 80%. Combined: old approach seems better.

**Survivorship bias:** Only analyzing successes, ignoring failures. "My investment advice works! Look at my successful clients." Hidden: 900 clients lost money; only 100 succeeded.

**Correlation without causation:** "Successful entrepreneurs wear blue." Correlation exists. Causation doesn't.

**Incentive analysis:** Follow the money. Who benefits from people believing this claim? Pharmaceutical companies presenting drug trials have incentive to emphasize positive results. Training programs advertising success might count part-time jobs as success.

**Red flags:** Missing context, hidden methods, emotional language, impressive-sounding metrics without absolute numbers, single data point presented as universal truth.

**Present data responsibly:** Show full context, break down by subgroups if they differ, present both successes and failures, explain methodology, acknowledge limits, use visualizations that don't distort scale.

---

## **3.5 Building Confidence in Data**

After learning how data is manipulated, it's tempting to distrust all data. That's the wrong conclusion. Goal isn't to distrust data; it's to use it wisely.

**Confidence spectrum:**

**Very high:** Consistent findings across multiple independent studies, large samples, transparent methods, predictions confirmed over time.

**High:** Well-designed studies with peer review, multiple sources agree, transparent and reproducible methods.

**Moderate:** Single study or limited replication, reasonable methods but some limits, partial agreement among sources.

**Low:** New data with limited evidence, methods not yet peer-reviewed, single source, contradictory findings elsewhere.

**Confidence checklist:** Was the sample size large enough? Representative of the population? Any obvious confounding variables? Reputable, transparent source? Other sources confirm or contradict? Funded by someone with incentive to skew findings? Has independent researchers replicated it? Recent or outdated? Applicable to my situation?

**Smart trust means acting despite imperfect information when downside risk is manageable.**

Act if: downside of being wrong is small, you can test and adjust, multiple imperfect sources point the same direction.

Don't act if: downside of being wrong is severe (hiring, legal, safety), you have time to gather better data, sources contradict, a single data point is guiding a major decision.

Avoid extremes: Data cynicism ignores useful patterns. Data worship ignores flawed construction. Smart middle ground: data is evidence but imperfect. Consider data alongside experience and judgment.
