import { Contacts } from './iContact'

export const CONTACTS: Contacts[] = [
    {
        "id" : 1,
        "deliveryFlag" : true,
        "type" : {
            "code" : 1,
            "value" : "מבוטח"
        },
        "firstName" : "ניקיטה",
        "lastName" : "ג'יין",
        "identity" : 278545412,
        "address" : {
            "homeNumber" : 9,
            "cityName" : "רחובות",
            "streetName" : "אופנהיימר"
        },
        "cellPhone" : 525816206,
        "email" : "NIKITA_JAIN@AMAT.COM"
    },
    {
        "id" : 2,
        "deliveryFlag" : false,
        "type" : {
            "code" : 21,
            "value" : "סוכן"
        },
        "firstName" : "טוביה",
        "lastName" : "בצקי",
        "identity" : 433974846,
        "address" : {
            "homeNumber" : 56,
            "cityName" : "רמת גן",
            "streetName" : "ביאליק"
        },
        "cellPhone" : 525452206,
        "email" : "tuvia-b@migdal.com"
    }
]

export const inProcess = {
    processType: "AMBULATORY_HEALTH_CLAIM",
    processStatus: 1,
    superClaim: {
        inquiryPorcessFlag: true,
        irregularSuperClaimFlag: false,
        pensionFollowUpForInsuredType: 0,
        superClaimStatus : {
            code : 1,
            value : "פתוחה"
        },
        deathAfterDisabilityFlag: false,
        operativeClaims: [
            {
                operativeClaimNum: 123,
                company : 2,
                claimStatus : {
                    code : 2,
                    value : "פתוחה"
                },
                coverages: [
                    {
                        coverageNum: 1,
                        claimParticipating: false
                    },
                    {
                        coverageNum: 2,
                        claimParticipating: false
                    }
                ]
            }, {
                operativeClaimNum: 24531,
                company : 1,
                claimStatus : {
                    code : 1,
                    value : "מבוטלת"
                },
                coverages: [
                    {
                        coverageNum: 1,
                        claimParticipating: true
                    },
                    {
                        coverageNum: 2,
                        claimParticipating: false
                    }
                ]
            }
        ]
    },
    insured : {
        companyEmployer : true,
        position: "פקיד",
        identity : 27854122145,
        firstName : "מריה",
        lastName : "ג'יין",
        age: 35,
        lastJobDescription : "כללי - מקפת",
        smokingCode : 0,
        email : "NIKITA_JAIN@AMAT.COM",
        address : {
            cityName : "רעננה",
            streetName : "אחוזה",
            cellPhone : 544485236
        }
    },

}