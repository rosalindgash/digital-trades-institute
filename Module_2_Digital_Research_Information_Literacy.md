## **Module 2: Digital Research & Information Literacy**

## **2.1 Verifying Sources in the AI Era**

In a pre-AI world, verification meant: Who published this? Is the source reputable? Do others say the same thing?

In the AI era, verification is more complex because AI can summarize information confidently without checking facts, mix real facts with plausible fiction seamlessly, and generate content that looks authoritative with no actual source.

**The verification pyramid:**
- **Strongest:** Primary sources—original data, research, documents, academic papers, first-hand accounts
- **Medium:** Secondary sources—analysis of primary sources, news articles citing multiple sources, expert analysis
- **Weakest:** Tertiary sources—social media posts, summaries of summaries, hearsay, AI summaries without sources

When AI gives you information, ask: Does it cite sources? Can you locate those sources? Do multiple independent sources agree? Is the source aligned with the claim's importance? When was it published? Who created this source and do they have credibility?

If a claim comes from only one source, all sources are tertiary, or the source doesn't exist, treat it as unverified. Primary sources always trump summaries.

---

## **2.2 Prompting as Structured Inquiry**

Vague prompts get vague answers. Structured prompts get useful results.

Instead of "Tell me about marketing," better is "Write a 2-paragraph summary comparing email and social media marketing for small businesses. Focus on cost, time investment, and best practices. Assume the reader is a business owner with no marketing background."

**Prompt architecture has four components:**

**Context:** Tell AI who you are and what you need. "I'm evaluating [tool] for [specific use]."

**Task:** Be specific about what you want. "List the top 5...", "Compare X and Y...", "Explain why..."

**Format:** Specify how you want the answer. "In a table with columns for..." or "As a bulleted list."

**Constraints:** Set boundaries to keep AI focused. "Focus on sources from the last 2 years," "Avoid jargon; explain as if to a teenager," "Include only verified information."

Good research rarely happens in one prompt. Use follow-up questions to refine. First prompt: "What are the main challenges?" Follow-up: "Which can AI help address?" Next: "What specific tools exist?" Final: "What should I look for in evaluating them?"

This progression moves from broad to specific, general to actionable.

---

## **2.3 Avoiding Hallucinations & Misinformation**

An AI hallucination is when an AI generates information that sounds authoritative but is completely false. It's not deliberately lying—it's doing what it was designed to do (predict the next word)—but produces false information confidently.

**Why hallucinations happen:** AI predicts what word should come next based on patterns. Sometimes it learns "when topic X appears, facts Y and Z usually follow," so it generates Y and Z without checking if they're true. When asked about something not well-represented in training data, AI invents plausible-sounding details rather than saying "I don't know."

**Three types of hallucinations:**

**Factual:** AI invents facts that sound real. "Dr. Sarah Mitchell published a 2023 study on AI productivity" (Mitchell doesn't exist).

**Source:** AI cites sources that don't exist or misquotes real ones. Claims a real author wrote something they didn't, invents journal issues, cites studies with wrong dates.

**Logical:** AI creates false causal connections. "Because it rained Tuesday, sales increased 30% that week" with no logical mechanism.

**Detection:** If AI cites a source, search for it. Can you find it? Not found = hallucination. Verify specific claims against independent sources. If sources don't exist or contradict what AI said, the claim is unverified.

---

## **2.4 Human-in-the-Loop Research Workflows**

Best research workflows don't replace humans with AI or ignore AI's benefits. They integrate AI as a powerful assistant while keeping humans in control.

**Five-step loop:**

**Step 1:** Define your question. What specifically do you need? Why? Who will act on this?

**Step 2:** Use AI to research broadly. Ask for multiple angles on the topic. Request summaries of key findings. Get sources and citations.

**Step 3:** Verify and cross-check. Independently verify top claims. Search for the sources AI cited. Read key sources yourself. Check for bias or conflicts of interest.

**Step 4:** Synthesize and interpret. Combine AI's synthesis with your verification findings. Note areas of disagreement. Draw conclusions you can support.

**Step 5:** Double-check high-stakes claims. If your research will influence important decisions, have someone else review. Test conclusions against real-world experience. Get feedback from domain experts.

This process ensures you're not blindly trusting AI summaries while still benefiting from their speed. The stakes of your conclusion determine how rigorously you verify. Internal status update? Light verification. Major business decision? Deep verification.

---

## **2.5 Evaluating AI Tools Themselves**

Not all AI tools are equally reliable. Different tools have different strengths, training data, update frequencies, and transparency.

**Tool types:**

**General-purpose LLMs** (ChatGPT, Claude): Versatile, good for brainstorming and drafting. Training data has a cutoff date; hallucinations are common. Best for initial research and exploring topics, not finishing points.

**Specialized research tools** (Google Scholar, Perplexity AI): Designed for research, often include citations. Still prone to hallucinations. Best for academic and technical research.

**Search-based AI** (Perplexity, OpenAI GPT-4 with browsing): Access current information, cite sources, update regularly. Still subject to search algorithm limitations and source distortion. Best for current events and trending topics.

**Domain-specific AI** (Medical AI, legal research): Trained on specialized data, understand field context. Expensive, may not generalize beyond their domain. Best for in-depth work within specific professions.

**Questions to ask:** What data was it trained on and when? When was it last updated? Does it cite sources? What are its known limitations? Who built it and what are their incentives? How transparent is it about how it works?

A trustworthy tool tells you what it was trained on, admits what it doesn't know, explains reasoning or shows sources, has independent audits, and is transparent about limitations. A suspicious tool claims to know everything, never admits uncertainty, doesn't show sources, isn't transparent, and makes extraordinary claims without evidence.
