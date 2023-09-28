export const IOTweek9 = [
    {
        id: 1,
        question: "Which component of OpenStack do you use to access all the other components?",
        options: {
            a: "Horizon",
            b: "Glance",
            c: "Neutron",
            d: "None of these"
        },
        answer: "Horizon"
    },
    {
        id: 2,
        question: "Which among the following is NOT a component of OpenStack?",
        options: {
            a: "Horizon",
            b: "Heat",
            c: "Plasma",
            d: "Neutron"
        },
        answer: "Plasma"
    },
    {
        id: 3,
        question: "Sensor cloud is simply dumping and organizing of sensor data on cloud computing platforms.",
        options: {
            a: "True",
            b: "False"
        },
        answer: "False"
    },
    {
        id: 4,
        question: "Which among the following are limitations of traditional Wireless Sensor Networks (WSNs)?",
        options: {
            a: "Procurement Issues",
            b: "Deployment Issues",
            c: "Maintenance Issues",
            d: "All of the given"
        },
        answer: "All of the given"
    },
    {
        id: 5,
        question: "In a typical sensor cloud architecture, the sensor cloud infrastructure that provides the virtualization lies _______",
        options: {
            a: "At the same layer as physical sensor devices",
            b: "At the application layer",
            c: "In between the physical sensor layer and the application layer",
            d: "Sensor cloud does not support virtualization"
        },
        answer: "In between the physical sensor layer and the application layer"
    },
    {
        id: 6,
        question: "Generally speaking, Sensor Cloud Service Providers (SCSPs) are also always the owners of the physical sensors.",
        options: {
            a: "Yes",
            b: "No"
        },
        answer: "No"
    },
    {
        id: 7,
        question: "In a typical sensor cloud architecture with virtualization, one virtual sensor can be associated with how many physical sensors?",
        options: {
            a: "Only one",
            b: "One or more than one",
            c: "None",
            d: "Only two"
        },
        answer: "One or more than one"
    },
    {
        id: 8,
        question: "Sensor virtualization aims to achieve more ________ in providing sensor-based services.",
        options: {
            a: "Complexity",
            b: "Flexibility"
        },
        answer: "Flexibility"
    },
    {
        id: 9,
        question: "Suppose that you want to start a business to provide some IoT-based application, but you do not have the means to develop the application layer logic, neither you have the means to purchase and deploy physical sensors. You can, however, rent cloud servers for use and write interface logic for interfacing with other modules. Which among the following actors will be the most suitable for you?",
        options: {
            a: "Physical sensor owner",
            b: "Application layer developer",
            c: "Sensor Cloud Service Provider (SCSP)",
            d: "You cannot start the business"
        },
        answer: "Sensor Cloud Service Provider (SCSP)"
    },
    {
        id: 10,
        question: "Which among the following is implemented along with sensor cloud to make its services and performance better?",
        options: {
            a: "Cashing",
            b: "Caching",
            c: "Casing",
            d: "Calling"
        },
        answer: "Caching"
    },
    {
        id: 11,
        question: "Which among the following cases is most likely to reduce the overall price of sensor-cloud implementation provided that the data traverses through multiple sensor hops starting from the origin sensor to the sink node, and provided that all owners are honest and charge for only what is required?",
        options: {
            a: "If physical sensors are owned by multiple owners with high profit margin",
            b: "If all physical sensors are owned by a single owner with a uniform profit margin"
        },
        answer: "If all physical sensors are owned by a single owner with a uniform profit margin"
    },
    {
        id: 12,
        question: "Fog computing is aimed to replace cloud computing completely and has no scope for integration with cloud.",
        options: {
            a: "True",
            b: "False"
        },
        answer: "False"
    },
    {
        id: 13,
        question: "Suppose data from an IoT device first goes to the Fog layer for some basic processing, after which it goes to the Cloud layer for advanced processing, then the processed data comes back to the Fog layer and then, it finally comes back to the origin sensor node. In the return journey, no processing of data takes place anywhere, just the transfer of data takes place. If ‘Tf’ is the time taken by the data to travel from the sensor to fog and vice versa, and ‘Tc’ is the time taken by the data to travel from fog to cloud and vice versa, ‘Tfp’ is the data processing time at fog and ‘Tcp’ is the data processing time at cloud, what is the total round trip time ‘T’ taken by data starting from the origin sensor node, processing the data, and then back to the sensor node after being processed.",
        options: {
            a: "T = Tf + Tc + Tfp + Tcp",
            b: "T = Tf + Tc",
            c: "T = 2(Tf + Tc) + Tfp + Tcp",
            d: "T = 4(Tf + Tc + Tfp + Tcp)"
        },
        answer: "T = 2(Tf + Tc) + Tfp + Tcp"
    },
    {
        id: 14,
        question: "Consider the standard Fog computing architecture. In which of the following layers will 'very time-sensitive data' be processed?",
        options: {
            a: "Nearest fog node",
            b: "Distant aggregate fog node",
            c: "Cloud",
            d: "Does not matter"
        },
        answer: "Nearest fog node"
    },
    {
        id: 15,
        question: "“Network, Accelerator, Compute, and Storage” constitute the part of which view of fog computing architecture, as defined by OpenFog Consortium Architecture Working Group?",
        options: {
            a: "System View",
            b: "Node View",
            c: "Software View",
            d: "None of these"
        },
        answer: "Node View"
    }
];
