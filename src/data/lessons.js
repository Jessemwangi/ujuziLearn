 //course_curriculum_lesson

const lessons = [
    {
      title: 'Experience 1: Exploring Basics of Current Electricity through demonstration',
      id:'les1',
    //  course_curriculum_lesson_header
      headers: [
        {
        id:'hd1_1',
          title: 'Understanding Closed Circuits and Current Flow',
          content: '<p>Understanding electrons and electric charges</p><p>Remove the switch to interrupt the current flow and observe that the LEDs are not illuminated. Discuss the role of electrons and electric charges in current flow. Investigate why the LEDs are not lighting up without the closed path for electron movement. With the support of the next video.</p>'
        },
        {
            id:'hd1_2',
          title: 'Group discussion',
          content: '<ol><li>Explain the distinction between electrons and electric charges and illustrate their relationship.</li><li>What occurs to the LEDs in the electric circuit above when the switch is turned on, and what is the reason behind this phenomenon?</li><li>What occurs to the LEDs in the electric circuit above when the switch is off, and what is the reason behind this phenomenon?</li></ol>'
        }
      ]
    },
    {
      title: 'Experience 2: Basic electric circuit',
      id:'les2',
      headers: [
        {
            id:'hd2_1',
          title: 'Key Components in a Basic Electric Circuit',
          content: '<p>Schematic of basic electric circuit</p><p>Group discussion:</p><ol><li>List any four components which forms a simple electric circuit.</li><li>Describe the function of each component in the circuit.</li><li>Is it possible for a circuit to operate without one component, and if yes, which component can be omitted? Additionally, what are the disadvantages of not having this component?</li></ol>'
        },
        {
            id:'hd2_2',
          title: 'Understanding Power Ratings for Circuit Components and Electrical Devices',
          content: '<p>The power rating of circuit components and electric devices indicates the maximum amount of power they can handle without being damaged. Understanding power ratings is crucial for ensuring that components are not overloaded, which can lead to overheating, fires, or other safety hazards. By adhering to the power ratings, users can prevent electrical failures and maintain safe operation of their devices. Additionally, knowledge of power ratings helps in selecting appropriately sized components for a circuit, optimizing efficiency and reliability while reducing the risk of electrical accidents.</p><p>To determine the power rating of components and devices:</p><ol><li>Check the datasheet: Look for "Electrical Characteristics" or similar sections.</li><li>Look for labels: Some components have power ratings printed on them.</li><li>Calculate power: For resistors and LEDs, you can calculate power using P = I * V or P = V^2 / R.</li><li>Consider environmental factors: Check for any temperature-related information.</li></ol><p>Units involved: Power is measured in watts (W), milliwatts (mW), or kilowatts (kW).</p><p>Understanding power ratings helps in determining suitable circuit parameters using Ohm\'s law.</p>'
        },
        {
          title: 'Home exploration',
          content: '<p>Check and note down the power ratings of TV, phone charger, refrigerator, Radio and share your findings in the class, comparing equipment from different house holds, their differences, their similarities etc.</p>'
        },
        {
          title: 'Understanding Ohm\'s Law in Basic Circuits',
          content: '<p>Group discussion:</p><ol><li>What is the approximate current passing through the circuit if the resistor has a resistance of 300Ω, the voltage of the source is 9V, and the LED has a forward voltage of 2V?</li><li>Briefly describe how current, voltage, and resistance are related in a basic electric circuit.</li><li>Explain what happens to the LED in simple electric circuit above if the circuit is connected without a resistor.</li></ol>'
        },
        {
          title: 'How to measure current and voltage in the circuit',
          content: '<p>Measurement of current</p><p>Group work:</p><ol><li>Describe how a multmeter should be connected in the circuit to measure electric current.</li><li>Why is it necessary to know the value of current in electric circuit?</li><li>Perform the measurement of current in simple electric circuit.</li></ol><p>Measurement of Voltage</p><p>Group work:</p><ol><li>How should a multimeter be connected to measure voltage in a circuit?</li><li>Why is understanding the value of voltage important in electric circuits?</li><li>Measure the voltage of the battery, voltage drop across the resistor, and across the LED.</li><li>Verify the measured current and voltage values using Ohm\'s Law.</li><li>What are the consequences of disregarding Ohm\'s Law in a circuit? Provide an example scenario where an LED burns out due to excessive current, illustrating the repercussions of not adhering to Ohm\'s Law.</li></ol>'
        },
        {
          title: 'Significance of a simple circuit',
          content: '<p>A simple circuit is important because it teaches us the basics of electricity. It helps us understand how things like switches, batteries, and lights work together. By learning about simple circuits, we can understand more complicated electronics later.</p>'
        },
        {
          title: 'Intro to series and parallel circuits',
          content: '<p>Video (Formulas): https://youtu.be/UwapeLcLuMY</p>'
        }
      ]
    },
    {
      title: 'Experience 3: Series circuit',
      id:'les3',
      headers: [
        {
          title: 'Arrangement of Components in a Series Circuit: Contrasting with Simple Circuits',
          content: '<p>Schematic of a series circuit</p>'
        },
        {
          title: 'Measuring Current and Voltage in a Series Circuit',
          content: '<p>In a series circuit, current is typically measured by placing an ammeter in series with the components, allowing it to measure the total current flowing through the circuit. Voltage, on the other hand, is measured by placing a voltmeter in parallel with each component or across the entire circuit, enabling it to measure the potential difference between two points. This measurement helps determine the voltage drop across individual components or the total voltage supplied by the source in the circuit.</p>'
        },
        {
          title: 'Measurement of current',
          content: '<p>Measurement of current</p>'
        },
        {
          title: 'Ohm\'s law for a series circuit',
          content: '<p>Ohm\'s Law for a series circuit with two resistors states that the total voltage (V) equals the sum of the voltage drops across each resistor. The formula is V = V₁ + V₂, where V is the total voltage and V₁, V₂ are the voltage drops across each resistor. In a series circuit, the current (I) remains constant, while the voltage varies across each resistor based on its resistance (R) and Ohm\'s Law (V = I * R). The total resistance (R_total) in a series circuit with two resistors of different resistances (R₁ and R₂) is calculated by adding the resistances: R_total = R₁ + R₂. This differs from a simple circuit, where the voltage across each component is the same.</p>'
        },
        {
          title: 'Significance of series circuits',
          content: '<p>The significance of series circuits lies in their simplicity and their role in understanding fundamental principles of electricity. Series circuits serve as a foundational concept in electrical engineering and electronics education. They allow for the comprehension of important concepts such as current flow, voltage drop, and resistance. Additionally, series circuits are commonly encountered in various electronic devices, making them essential for troubleshooting and maintenance. Understanding series circuits helps engineers and technicians design, analyze, and repair complex electrical systems effectively.</p>'
        },
        {
          title: 'Extra points',
          content: '<ol><li>We can connect various loads in series if we want them to share the current: In a series circuit, all components are connected sequentially, so they all experience the same current flowing through them. This means that the current is shared among all the loads connected in series.</li><li>We can connect two equal voltage sources in series if we want to double the voltage: When voltage sources are connected in series, their voltages add up. If two equal voltage sources are connected in series, the total voltage across the circuit is the sum of the voltages of each source, effectively doubling the voltage.</li></ol>'
        },
        {
          title: 'Group work',
          content: '<ol><li>How does current flow in a series circuit, and how does this differ from a simple circuit?</li><li>First, draw the circuit diagram for the series circuit with two resistors (300Ω and 500Ω) and an LED with a forward voltage of 2V, supplied by a 9V source. Then, calculate the current flowing through the circuit.</li><li>Repeat the previous calculation if given two LEDs instead of one.</li><li>Provide two real-world scenarios where series circuits are used and explain their applications.</li></ol>'
        }
      ]
    },
    {
      title: 'Experience 4: Parallel circuit',
      id:'les4',
      headers: [
        {
          title: 'Understanding Component Arrangement in Parallel Circuits: Contrasts with Simple and Series Circuits',
          content: '<p>Current and voltage measurement in a parallel circuit.</p><p>In parallel circuits, current is typically measured by placing an ammeter in series with each branch of the circuit, allowing it to measure the current flowing through that specific branch. Voltage, on the other hand, is measured by placing a voltmeter in parallel with each component or across each branch of the circuit, enabling it to measure the potential difference across that specific component or branch. This measurement helps determine the voltage drop across individual components or branches in the parallel circuit.</p>'
        },
        {
          title: 'Current measurement',
          content: '<p>Current measurement.</p>'
        },
        {
          title: 'Ohm\'s law for a parallel circuit',
          content: '<p>Ohm\'s Law for a parallel circuit with two resistors states that the total current (I) flowing into the circuit equals the sum of the currents flowing through each resistor. The formula is I = I₁ + I₂, where I is the total current and I₁, I₂ are the currents flowing through each resistor. In a parallel circuit, the voltage (V) across each resistor is the same, while the current varies based on the resistance (R) and Ohm\'s Law (I = V / R). The total resistance (R_total) in a parallel circuit with two resistors of different resistances (R₁ and R₂) is calculated using the formula: 1/R_total = 1/R₁ + 1/R₂. This differs from a simple circuit, where the total resistance is simply the sum of the resistances.</p>'
        },
        {
          title: 'Significance of parallel circuits',
          content: '<p>The significance of parallel circuits lies in their ability to distribute electrical power efficiently and provide redundancy in electrical systems. Parallel circuits offer several advantages, including:</p><ol><li>Independent operation: Components in parallel circuits operate independently, allowing one component to function even if others fail. This redundancy increases the reliability of the system.</li><li>Voltage regulation: In parallel circuits, each component receives the full voltage of the source. This ensures consistent voltage across all components, making parallel circuits ideal for applications requiring stable voltage levels.</li><li>Easy troubleshooting: Parallel circuits facilitate troubleshooting by isolating faulty components. If one component fails, it does not affect the operation of other components, making it easier to identify and replace the faulty part.</li><li>Increased power capacity: Parallel circuits can handle higher power loads compared to series circuits. By connecting components in parallel, the overall current-carrying capacity of the circuit increases, allowing for the connection of multiple devices without overloading the circuit.</li><li>Flexibility in design: Parallel circuits offer flexibility in system design, allowing for the addition or removal of components without affecting the operation of other components. This adaptability makes parallel circuits suitable for a wide range of applications in electronics, electrical engineering, and power distribution systems.</li></ol>'
        },
        {
          title: 'Extra points',
          content: '<ol><li>Various loads can be connected in parallel to ensure they receive the same voltage.</li><li>Connecting two equal voltage sources in parallel doubles the available current.</li></ol>'
        },
        {
          title: 'Group exercise',
          content: '<ol><li>How does current flow in a parallel circuit, and what distinguishes this from both a simple circuit and a series circuit?</li><li>First, draw the circuit diagram for the described parallel circuit with two 300Ω resistors connected to a blue LED and two 500Ω resistors connected to a green LED, supplied by a 9V source. Then, calculate the current flowing through the circuit, considering the forward voltages of 2.2V for the blue LED and 2V for the green LED.</li><li>Repeat the previous calculation if two LEDs are connected in each case instead of one.</li><li>Consider and describe two real-world scenarios where parallel circuits are employed, providing explanations for their utilization.</li></ol>'
        }
      ]
    },
    {
      title: 'Applications of Electricity in our daily lives',
      id:'les5',
      headers: [
        {
          title: 'Applications of Electricity in our daily lives',
          content: '<p>Here are ten common applications of electricity in our daily lives:</p><ol><li>Lighting: Illuminating homes, offices, streets, and public spaces using light bulbs, LEDs, and other lighting fixtures.</li><li>Heating and cooling: Regulating indoor temperatures with electric heaters, air conditioners, and fans for comfort and climate control.</li><li>Cooking: Utilizing electric stoves, ovens, microwaves, and toaster ovens for meal preparation.</li><li>Entertainment: Powering televisions, radios, computers, gaming consoles, and home theaters for leisure and communication.</li><li>Communication: Charging smartphones, tablets, laptops, and other electronic devices, as well as operating landline and mobile phones.</li><li>Transportation: Driving electric vehicles (EVs), hybrid cars, and electric bicycles to commute and travel while reducing environmental impact.</li><li>Healthcare: Supporting medical equipment such as X-ray machines, MRI scanners, defibrillators, and electrically powered surgical tools in hospitals and clinics.</li><li>Personal care: Using electric toothbrushes, hair dryers, shavers, and electric razors for grooming and hygiene.</li><li>Home appliances: Operating washing machines, dryers, dishwashers, refrigerators, freezers, and vacuum cleaners for household chores and maintenance.</li><li>Security: Powering alarm systems, surveillance cameras, motion sensors, and electronic door locks to safeguard homes and businesses.</li></ol>'
        }
      ]
    },
    {
      title: 'Significance of Electricity Lessons in everyday Life',
      id:'les5',
      headers: [
        {
          title: 'Group discussion based on home experience',
          content: '<ol><li>Investigate the connection of light bulbs at home, whether its series connection or parallel connection and provide reasons why it\'s done that way.</li><li>Investigate the Extension cables or wall sockets used to distribute light to appliances in the house. Identify if those are connected in series or parallel and give the reason for such a connection.</li><li>Discuss whether it is wiser to connect the electric stove to an extension cable at home or not. Provide the reasoning to your answer.</li><li>Discuss how power rating of electric stove and other appliances can help us understand why such equipment shouldn\'t be connected to a normal extension cable in our homes.</li><li>Discuss/ investigate the possible causes of electric accidents in households.</li></ol>'
        }
      ]
    }
  ]

  export default lessons;