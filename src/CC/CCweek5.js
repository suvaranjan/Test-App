export const CCweek5 = [
    {
        id: 1,
        question: "Which of the following is/are the objective(s) of Resource Management?[1: Increased overhead, 2: Increased throughput, 3: Increased latency, 4: Scalability]",
        options: {
            a: "1 and 4",
            b: "2 and 4",
            c: "1 and 2",
            d: "3 and 4"
        },
        answer: "2 and 4"
    },
    {
        id: 2,
        question: "Multiple KPIs are aggregated to SLA.",
        options: {
            a: "True",
            b: "False"
        },
        answer: "False"
    },
    {
        id: 3,
        question: "In cloud computing, Performance per Watt follows Moore's law.",
        options: {
            a: "True",
            b: "False"
        },
        answer: "False"
    },
    {
        id: 4,
        question: "Which of the following is/are resource adaptation approaches ? [1: Reinforcement Learning Scanning guided control policy, 2: Intelligent multi-agent model, 3: Network queueing model, 4: Web-service based prototype]",
        options: {
            a: "1 and 4",
            b: "2 and 4",
            c: "1 and 2",
            d: "3 and 4"
        },
        answer: "1 and 4"
    },
    {
        id: 5,
        question: "A third-party application runs in the cloud for 18 hours/day. What are the value(s) of T among the given options such that the SLA negotiation does NOT get honored in terms of service availability ? Choose => [1: 3 hours, 2: 5 hours, 3: 6 hours, 4: 4 hours] ",
        options: {
            a: "1 and 4",
            b: "2 and 3",
            c: "1 and 2",
            d: "3 and 4"
        },
        answer: "2 and 3"
    },
    {
        id: 6,
        question: "Consider that the peak computing demand for an organization is 200 units. The demand as a function of time can be expressed as D(t) = 8t. Baseline (owned) unit cost is 120 and cloud unit cost is 150. The cloud is owned for a period of T time units. Select the values of T for which cloud is cheaper than owning. Choose => [1: 25, 2: 30, 3: 35, 4: 45]",
        options: {
            a: "1, 2, 4",
            b: "2, 3, 4",
            c: "1, 2, 3",
            d: "4, 3, 1"
        },
        answer: "1, 2, 3"
    },
    {
        id: 7,
        question: "Which of the following is/are true regarding penalty cost? (Here D(t) and R(t) are instantaneous demand and resources at time t.). Choose => [1: If demand is flat, the penalty is equal to 0, 2: Penalty cost ∝ |D(t)/R(t)|dt, 3: If demand is exponential (D(t)=e^t), any fixed provisioning interval (fp) according to the current demands will fall linearly behind, 4: The penalty cost for exponential demand is exponential.] ",
        options: {
            a: "1 and 4",
            b: "2 and 3",
            c: "1 and 2",
            d: "3 and 4"
        },
        answer: "1 and 4"
    },
    {
        id: 8,
        question: "In resource management, is determining when an activity should start or end, depending on its duration, predecessor activities, predecessor relationships, etc.",
        options: {
            a: "Resource allocation",
            b: "Resource mapping",
            c: "Resource scheduling",
            d: "Resource modeling"
        },
        answer: "Resource scheduling"
    },
    {
        id: 9,
        question: "Which of the following techniques can be used to conserve energy within a Cloud environment ? Choose => [1: Schedule VMs to conserve energy, 2: Optimize data center design, 3: Maximize operating inefficiencies for non-essential tasks, 4: Management of both VMs and underlying infrastructure] ",
        options: {
            a: "1, 2, 4",
            b: "2, 3, 4",
            c: "1, 2, 3",
            d: "4, 3, 1"
        },
        answer: "1, 2, 4"
    },
    {
        id: 10,
        question: "An app collects the ratings of restaurants in a particular location and logs it in the following form: <userId, restaurantId, rating>. 'restaurantId' takes any of the values (A, B, C, D) and each user having a unique userId can provide [0,5] rating. There are three files, and each file consists of three columns: userId, restaurantId, and rating. Now, out of this data, we need to calculate the number of times each restaurant gets a '3-star' rating from users.",
        options: {
            a: "<A, 5>;<B, 5>;<C, 5>;<D, 5>",
            b: "<A, 5;<B, 2>;<C, 3>;<D, 5>",
            c: "A;B;C;D",
            d: "<A, 5><D, 5>"
        },
        answer: "<A, 5;<B, 2>;<C, 3>;<D, 5>"
    }
];
