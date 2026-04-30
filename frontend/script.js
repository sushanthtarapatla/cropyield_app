const districtData = {
    "Andaman and Nicobar Islands": ["NICOBARS", "NORTH AND MIDDLE ANDAMAN", "SOUTH ANDAMANS", "Andaman and Nicobar Islands"], //
    "Andhra Pradesh": ["ANANTAPUR", "EAST GODAVARI", "KRISHNA", "VIZIANAGARAM", "WEST GODAVARI", "ADILABAD", "CHITTOOR", "GUNTUR", "KADAPA", "KARIMNAGAR", "KHAMMAM", "KURNOOL", "MAHBUBNAGAR", "MEDAK", "NALGONDA", "NIZAMABAD", "PRAKASAM", "RANGAREDDI", "SPSR NELLORE", "SRIKAKULAM", "VISAKHAPATANAM", "WARANGAL", "HYDERABAD"], //
    "Arunachal Pradesh": ["CHANGLANG", "DIBANG VALLEY", "EAST KAMENG", "EAST SIANG", "KURUNG KUMEY", "LOHIT", "LOWER DIBANG VALLEY", "LOWER SUBANSIRI", "PAPUM PARE", "TAWANG", "TIRAP", "UPPER SIANG", "UPPER SUBANSIRI", "WEST KAMENG", "WEST SIANG", "ANJAW", "KRA DAADI", "LONGDING", "NAMSAI", "SIANG", "KAMLE", "LOWER SIANG", "LEPARADA", "PAKKE KESSANG", "SHI YOMI"], //
    "Assam": ["BARPETA", "BONGAIGAON", "CACHAR", "DARRANG", "DHEMAJI", "DHUBRI", "DIBRUGARH", "DIMA HASAO", "GOALPARA", "GOLAGHAT", "HAILAKANDI", "JORHAT", "KAMRUP", "KARBI ANGLONG", "KARIMGANJ", "KOKRAJHAR", "LAKHIMPUR", "MARIGAON", "NAGAON", "NALBARI", "SIVASAGAR", "SONITPUR", "TINSUKIA", "BAKSA", "CHIRANG", "KAMRUP METRO", "UDALGURI", "BISWANATH", "CHARAIDEO", "HOJAI", "MAJULI", "SOUTH SALMARA MANCACHAR", "WEST KARBI ANGLONG"], //
    "Bihar": ["ARARIA", "ARWAL", "AURANGABAD", "BANKA", "BEGUSARAI", "BHAGALPUR", "BHOJPUR", "BUXAR", "DARBHANGA", "GAYA", "GOPALGANJ", "JAMUI", "JEHANABAD", "KAIMUR (BHABUA)", "KATIHAR", "KHAGARIA", "KISHANGANJ", "LAKHISARAI", "MADHEPURA", "MADHUBANI", "MUNGER", "MUZAFFARPUR", "NALANDA", "NAWADA", "PASHCHIM CHAMPARAN", "PATNA", "PURBI CHAMPARAN", "PURNIA", "ROHTAS", "SAHARSA", "SAMASTIPUR", "SARAN", "SHEIKHPURA", "SHEOHAR", "SITAMARHI", "SIWAN", "SUPAUL", "VAISHALI", "BOKARO", "CHATRA", "DEOGHAR", "DHANBAD", "DUMKA", "EAST SINGHBUM", "GARHWA", "GIRIDIH", "GODDA", "GUMLA", "HAZARIBAGH", "KODERMA", "LOHARDAGA", "PAKUR", "PALAMU", "RANCHI", "SAHEBGANJ", "WEST SINGHBHUM"], //
    "Chandigarh": ["CHANDIGARH"], //
    "Chhattisgarh": ["BASTAR", "BILASPUR", "DANTEWADA", "DHAMTARI", "DURG", "JANJGIR-CHAMPA", "JASHPUR", "KABIRDHAM", "KANKER", "KORBA", "KOREA", "MAHASAMUND", "RAIGARH", "RAIPUR", "RAJNANDGAON", "SURGUJA", "BIJAPUR", "NARAYANPUR", "BALOD", "BALODA BAZAR", "BALRAMPUR", "BEMETARA", "GARIYABAND", "KONDAGAON", "MUNGELI", "SUKMA", "SURAJPUR", "GAURELLA-PENDRA-MARWAHI"], //
    "Dadra and Nagar Haveli": ["DADRA AND NAGAR HAVELI"], //
    "Daman and Diu": ["Daman and Diu", "DIU", "DAMAN"], //
    "Delhi": ["Delhi", "DELHI_TOTAL"], //
    "Goa": ["Goa", "NORTH GOA", "SOUTH GOA"], //
    "Gujarat": ["AHMADABAD", "AMRELI", "ANAND", "BANAS KANTHA", "BHARUCH", "BHAVNAGAR", "DANG", "DOHAD", "GANDHINAGAR", "JAMNAGAR", "JUNAGADH", "KACHCHH", "KHEDA", "MAHESANA", "NARMADA", "NAVSARI", "PANCH MAHALS", "PATAN", "PORBANDAR", "RAJKOT", "SABAR KANTHA", "SURAT", "SURENDRANAGAR", "VADODARA", "VALSAD", "TAPI", "ARAVALLI", "BOTAD", "CHHOTAUDEPUR", "GIR SOMNATH", "MAHISAGAR", "DEVBHUMI DWARKA", "MORBI"], //
    "Haryana": ["AMBALA", "BHIWANI", "FARIDABAD", "FATEHABAD", "GURGAON", "HISAR", "JHAJJAR", "JIND", "KAITHAL", "KARNAL", "KURUKSHETRA", "MAHENDRAGARH", "PANCHKULA", "PANIPAT", "REWARI", "ROHTAK", "SIRSA", "SONIPAT", "YAMUNANAGAR", "MEWAT", "PALWAL", "CHARKI DADRI"], //
    "Himachal Pradesh": ["BILASPUR", "KANGRA", "KULLU", "MANDI", "SHIMLA", "SOLAN", "UNA", "CHAMBA", "HAMIRPUR", "SIRMAUR", "KINNAUR", "LAHUL AND SPITI"], //
    "Jammu and Kashmir": ["DODA", "JAMMU", "KATHUA", "RAJAURI", "UDHAMPUR", "KARGIL", "LEH LADAKH", "SRINAGAR", "BADGAM", "BARAMULLA", "POONCH", "PULWAMA", "ANANTNAG", "KUPWARA", "REASI", "SAMBA", "KISHTWAR", "RAMBAN", "KULGAM", "BANDIPORA", "GANDERBAL", "SHOPIAN"], //
    "Jharkhand": ["CHATRA", "DUMKA", "GARHWA", "GODDA", "GUMLA", "HAZARIBAGH", "KODERMA", "LATEHAR", "LOHARDAGA", "PAKUR", "PALAMU", "RANCHI", "SAHEBGANJ", "SARAIKELA KHARSAWAN", "SIMDEGA", "WEST SINGHBHUM", "BOKARO", "DEOGHAR", "DHANBAD", "EAST SINGHBUM", "GIRIDIH", "JAMTARA", "KHUNTI", "RAMGARH"], //
    "Karnataka": ["BAGALKOT", "BANGALORE RURAL", "BELGAUM", "BELLARY", "BENGALURU URBAN", "CHAMARAJANAGAR", "CHIKMAGALUR", "CHITRADURGA", "DAKSHIN KANNAD", "DAVANGERE", "DHARWAD", "GADAG", "HASSAN", "HAVERI", "KODAGU", "KOLAR", "MANDYA", "MYSORE", "SHIMOGA", "TUMKUR", "UDUPI", "UTTAR KANNAD", "BIDAR", "BIJAPUR", "GULBARGA", "KOPPAL", "RAICHUR", "RAMANAGARA", "CHIKBALLAPUR", "YADGIR", "BAGALKOTE", "BALLARI", "BELAGAVI", "CHAMARAJANAGARA", "CHIKKABALLAPURA", "CHIKKAMAGALURU", "DAKSHINA KANNADA", "MYSURU", "SHIVAMOGGA", "TUMAKURU", "UTTARA KANNADA", "VIJAYAPURA", "KALABURAGI", "YADAGIRI"], //
    "Kerala": ["ALAPPUZHA", "ERNAKULAM", "IDUKKI", "KANNUR", "KASARAGOD", "KOLLAM", "KOTTAYAM", "KOZHIKODE", "MALAPPURAM", "PALAKKAD", "PATHANAMTHITTA", "THIRUVANANTHAPURAM", "THRISSUR", "WAYANAD"], //
    "Laddakh": ["KARGIL"], //
    "Madhya Pradesh": ["ANUPPUR", "ASHOKNAGAR", "BALAGHAT", "BARWANI", "BETUL", "BHIND", "BHOPAL", "BURHANPUR", "CHHATARPUR", "CHHINDWARA", "DAMOH", "DATIA", "DEWAS", "DHAR", "DINDORI", "GUNA", "GWALIOR", "HARDA", "HOSHANGABAD", "INDORE", "JABALPUR", "JHABUA", "KATNI", "KHANDWA", "KHARGONE"]
}
function updateDistricts() {
    const state = document.getElementById("state").value;
    const districtDropdown = document.getElementById("district");

    // Reset the dropdown every time a new state is selected
    districtDropdown.innerHTML = '<option value="">Select District</option>';

    // Check if the selected state exists in our districtData
    if (districtData[state]) {
        districtData[state].forEach(d => {
            const option = document.createElement("option");
            option.value = d;
            option.text = d;
            districtDropdown.appendChild(option);
        });
    }
}

async function predict() {
    const resultElement = document.getElementById("result");
    const predictBtn = document.getElementById("predictBtn");
    
    // UX: Disable button and show loading state
    predictBtn.disabled = true;
    predictBtn.innerText = "Predicting...";
    
    // Reset result element styling
    resultElement.className = "";
    resultElement.innerText = "";

    const data = {
        State: document.getElementById("state").value,
        District: document.getElementById("district").value,
        Crop: document.getElementById("crop").value,
        Season: document.getElementById("season").value,
        Start_Year: parseInt(document.getElementById("year").value)
    };

    // Basic validation
    if (!data.State || !data.District) {
        resultElement.innerText = "Please select both a State and a District.";
        resultElement.className = "error";
        
        // Reset button
        predictBtn.disabled = false;
        predictBtn.innerText = "Predict Yield";
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        // UX: Show success styling
        resultElement.innerText = "🌾 Predicted Yield: " + result.predicted_yield.toFixed(2) + " tons/hectare";
        resultElement.className = "success";

    } catch (error) {
        console.error("Prediction failed:", error);
        
        // UX: Show error styling
        resultElement.innerText = "Error: Could not connect to the server. Make sure your Python backend is running!";
        resultElement.className = "error";
    } finally {
        // UX: Re-enable the button regardless of success or failure
        predictBtn.disabled = false;
        predictBtn.innerText = "Predict Yield";
    }
}