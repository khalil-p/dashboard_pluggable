import dashboardData from './accets/DashboardData.json'
const emptyTableMesage = 'No Data Available In The Table'
export const statusInfo = [
    {
        statusOf: 'car',
        info: [
            {
                info: 'Quotes',
                count: 0
            },
            {
                info: 'Redirectios',
                count: 0
            },
            {
                info: 'Proposal Pending',
                count: 0
            },
            {
                info: 'Payment Pending',
                count: 0
            },
            {
                info: 'Booking Pending',
                count: 0
            },
            {
                info: 'Inspection',
                count: 0
            },
            {
                info: 'Underwriting Approval',
                count: 0
            },
            {
                info: 'Issued',
                count: 0
            }
        ]
    },
    {
        statusOf: 'bike',
        info: [
            {
                info: 'Quotes',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Reg No',
                    'WhatsApp',
                    'Updated At',
                    'Employee Name',
                    'Pos Name',
                    'Partner Name',
                    'Action'
                ]
            },
            {
                info: 'Proposal Pending',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'Reg No',
                    'CKyc Status',
                    'Insurer',
                    'Premium',
                    'WhatsApp',
                    'Updated At',
                    'Employee Name',
                    'Pos Name',
                    'Partner Name',
                    'Action'
                ]
            },
            {
                info: 'Inspection',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Reg No',
                    'Company',
                    'CKyc Status',
                    'Inspection No.',
                    'Proposal Date',
                    'Employee Name',
                    'Pos Name',
                    'Partner Name',
                    'Payment Expiry',
                    'Status',
                    'Updated At',
                    'Action'
                ]
            },
            {
                info: 'Payment Pending',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'Reg No',
                    'CKyc Status',
                    'Insurer',
                    'Premium',
                    'WhatsApp',
                    'Updated At',
                    'Employee Name',
                    'Pos Name',
                    'Partner Name',
                    'Action'
                ]
            },
            {
                info: 'Booking Pending',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'Reg No',
                    'CKyc Status',
                    'Insurer',
                    'Premium',
                    'WhatsApp',
                    'Updated At',
                    'Employee Name',
                    'Pos Name',
                    'Partner Name',
                    'Action'
                ]
            },
            {
                info: 'Issued',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Policy Issue Date',
                    'CKyc Status',
                    'Reg No',
                    'Insurer',
                    'Premium',
                    'WhatsApp',
                    'Employee Name',
                    'Pos Name',
                    'Partner Name',
                    'Policy Type',
                    'Action'
                ]
            }
        ]
    },
    {
        statusOf: 'all',
        info: [
            {
                info: 'Quotes',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Section',
                    'Customer Name',
                    'Mobile No',
                    'Reg No',
                    'WhatsApp',
                    'Updated At',
                    'Employee Name',
                    'Pos Name',
                    'Partner Name',
                    'Action'
                ],
                tableData: dashboardData?.Quote__Buy_Now
                    ? dashboardData.Quote__Buy_Now.map((i) => {
                          return {
                              traceId: i?.trace_id,
                              section: i?.section,
                              customerName: i?.proposer_name,
                              mobileNo: i?.proposer_mobile,
                              regNo: i?.vehicle_registration_number,
                              whatsApp: i?.whatsApp_Number,
                              updatedAt: i?.quotes_date_timestamp,
                              employeeName: i?.employee_name,
                              posName: i?.pos_seller_name,
                              partnerName: i?.partner_seller_name,
                              actionLink: i?.current_page_link
                          }
                      })
                    : emptyTableMesage
            },
            {
                info: 'Redirectios',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'City/Pincode',
                    'CKyc Status',
                    'Insurer',
                    'Premium',
                    'WhatsApp',
                    'Updated At',
                    'Employee Name',
                    'POS Name',
                    'Partner Name',
                    'Action'
                ],

                tableData: dashboardData?.redirections
                    ? dashboardData.redirections.map((i) => {
                          return {
                              traceId: i?.trace_id,
                              section: i?.section,
                              customerName: i?.proposer_name,
                              mobileNo: i?.proposer_mobile,
                              regNo: i?.vehicle_registration_number,
                              whatsApp: i?.whatsApp_Number,
                              updatedAt: i?.quotes_date_timestamp,
                              employeeName: i?.employee_name,
                              posName: i?.pos_seller_name,
                              partnerName: i?.partner_seller_name,
                              actionLink: i?.current_page_link
                          }
                      })
                    : emptyTableMesage
            },
            {
                info: 'Rider',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Section',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'Updated At',
                    'Employee Name',
                    'POS Name',
                    'Partner Name',
                    'Action'
                ],
                tableData: dashboardData?.Rider
                    ? dashboardData.Rider.map((i) => {
                          return {
                              traceId: i?.trace_id,
                              section: i?.section,
                              customerName: i?.proposer_name,
                              mobileNo: i?.proposer_mobile,
                              email: i?.proposer_emailid,
                              updatedAt: i?.quotes_date_timestamp,
                              employeeName: i?.employee_name,
                              posName: i?.pos_seller_name,
                              partnerName: i?.partner_seller_name,
                              actionLink: i?.current_page_link
                          }
                      })
                    : emptyTableMesage
            },
            {
                info: 'Proposal Pending',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Section',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'Reg No',
                    'CKyc Status',
                    'Insurer',
                    'Premium',
                    'Whatsapp',
                    'Updated At',
                    'Employee Name',
                    'POS Name',
                    'Partner Name',
                    'Action'
                ],
                tableData: dashboardData?.Proposal_Pending
                    ? dashboardData.Proposal_Pending.map((i) => {
                          return {
                              traceId: i?.trace_id,
                              section: i?.section,
                              customerName: i?.proposer_name,
                              mobileNo: i?.proposer_mobile,
                              email: i?.proposer_emailid,
                              regNo: i?.vehicle_registration_number,
                              ckycStatus: i?.is_ckyc_verified === "Y" ? 'Verified' : "Not Verified",
                              insurer: i?.company_name,
                              premiumAmt: i?.premium_amount,
                              whatsApp: i?.whatsApp_Number,
                              updatedAt: i?.quotes_date_timestamp,
                              employeeName: i?.employee_name,
                              posName: i?.pos_seller_name,
                              partnerName: i?.partner_seller_name,
                              actionLink: i?.current_page_link
                          }
                      })
                    : emptyTableMesage
            },
            {
                info: 'Inspection',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Reg No',
                    'Company',
                    'CKyc Status',
                    'Inspection No.',
                    'Proposal Date',
                    'Employee Name',
                    'POS Name',
                    'Partner Name',
                    'Payment Expiry',
                    'Status',
                    'Updated At',
                    'Action'
                ],
                tableData: dashboardData?.Inspection
                    ? dashboardData.Inspection.map((i) => {
                          return {
                              traceId: i?.trace_id,
                              section: i?.section,
                              customerName: i?.proposer_name,
                              mobileNo: i?.proposer_mobile,
                              regNo: i?.reg_no,
                              whatsApp: i?.whatsApp_Number,
                              updatedAt: i?.quotes_date_timestamp,
                              employeeName: i?.employee_name,
                              posName: i?.pos_seller_name,
                              partnerName: i?.partner_seller_name,
                              actionLink: i?.current_page_link
                          }
                      })
                    : emptyTableMesage
            },
            {
                info: 'Payment Pending',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Section',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'Reg No',
                    'CKyc Status',
                    'Insurer',
                    'Premium',
                    'Whatsapp',
                    'Updated At',
                    'Employee Name',
                    'POS Name',
                    'Partner Name',
                    'Action'
                ],
                tableData: dashboardData?.Payment_Pending
                    ? dashboardData.Payment_Pending.map((i) => {
                          return {
                              traceId: i?.trace_id,
                              section: i?.section,
                              customerName: i?.proposer_name,
                              mobileNo: i?.proposer_mobile,
                              email: i?.proposer_emailid,
                              regNo: i?.vehicle_registration_number,
                              ckycStatus: i?.is_ckyc_verified === "Y" ? 'Verified' : "Not Verified",
                              whatsApp: i?.whatsApp_Number,
                              updatedAt: i?.quotes_date_timestamp,
                              employeeName: i?.employee_name,
                              posName: i?.pos_seller_name,
                              partnerName: i?.partner_seller_name,
                              actionLink: i?.current_page_link
                          }
                      })
                    : emptyTableMesage
            },
            {
                info: 'Booking Pending',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Section',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'Reg No',
                    'CKyc Status',
                    'Insurer',
                    'Premium',
                    'Status',
                    'Whatsapp',
                    'Updated At',
                    'Employee Name',
                    'POS Name',
                    'Partner Name',
                    'Action'
                ],
                tableData: dashboardData?.Booking_Pending
                    ? dashboardData.Booking_Pending.map((i) => {
                          return {
                              traceId: i?.trace_id,
                              section: i?.section,
                              customerName: i?.proposer_name,
                              mobileNo: i?.proposer_mobile,
                              regNo: i?.reg_no,
                              whatsApp: i?.whatsApp_Number,
                              updatedAt: i?.quotes_date_timestamp,
                              employeeName: i?.employee_name,
                              posName: i?.pos_seller_name,
                              partnerName: i?.partner_seller_name,
                              actionLink: i?.current_page_link
                          }
                      })
                    : emptyTableMesage
            },
            {
                info: 'Underwriting Approval',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'City/Pincode',
                    'Sum Insured Amt',
                    'Insured Member',
                    'Insurer',
                    'Premium',
                    'Status',
                    'Updated At',
                    'Employee Name',
                    'Partner Name'
                ],
                tableData: dashboardData?.Underwriting_Approval
                    ? dashboardData.Underwriting_Approval.map((i) => {
                          return {
                              traceId: i?.trace_id,
                              section: i?.section,
                              customerName: i?.proposer_name,
                              mobileNo: i?.proposer_mobile,
                              regNo: i?.reg_no,
                              whatsApp: i?.whatsApp_Number,
                              updatedAt: i?.quotes_date_timestamp,
                              employeeName: i?.employee_name,
                              posName: i?.pos_seller_name,
                              partnerName: i?.partner_seller_name,
                              actionLink: i?.current_page_link
                          }
                      })
                    : emptyTableMesage
            },
            {
                info: 'Issued',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Section',
                    'Customer Name',
                    'Mobile No',
                    'Policy Issue Date',
                    'CKyc Status',
                    'Reg No',
                    'Insurer',
                    'Premium',
                    'Whatsapp',
                    'Policy No.',
                    'Employee Name',
                    'POS Name',
                    'Partner Name',
                    'Policy Type',
                    'Action'
                ],
                tableData: dashboardData?.Issued
                    ? dashboardData.Issued.map((i) => {
                          return {
                              traceId: i?.trace_id,
                              section: i?.section,
                              customerName: i?.proposer_name,
                              mobileNo: i?.proposer_mobile,
                              regNo: i?.reg_no,
                              whatsApp: i?.whatsApp_Number,
                              updatedAt: i?.quotes_date_timestamp,
                              employeeName: i?.employee_name,
                              posName: i?.pos_seller_name,
                              partnerName: i?.partner_seller_name,
                              actionLink: i?.current_page_link
                          }
                      })
                    : emptyTableMesage
            }
        ]
    },
    {
        statusOf: 'health',
        info: [
            {
                info: 'Quotes',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Sum Insured Amt',
                    'Insured Member',
                    'Updated At',
                    'Employee Name',
                    'Pos Name',
                    'Partner Name',
                    'Action'
                ]
            },
            {
                info: 'Rider',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Sum Insured Amt',
                    'Insured Member',
                    'Updated At',
                    'Employee Name',
                    'Pos Name',
                    'Partner Name',
                    'Action'
                ]
            },
            {
                info: 'Proposal Pending',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'City/Pincode',
                    'Sum Insured Amt',
                    'Insured Member',
                    'CKyc Status',
                    'Insurer',
                    'Premium',
                    'Updated At',
                    'POS Name',
                    'Partner Name',
                    'Action'
                ]
            },
            {
                info: 'Payment Pending',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'City/Pincode',
                    'Sum Insured Amt',
                    'Insured Member',
                    'CKyc Status',
                    'Insurer',
                    'Premium',
                    'Updated At',
                    'Employee Name',
                    'POS Name',
                    'Partner Name',
                    'Action'
                ]
            },
            {
                info: 'Booking Pending',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'City/Pincode',
                    'Sum Insured Amt',
                    'Insured Member',
                    'CKyc Status',
                    'Insurer',
                    'Premium',
                    'Status',
                    'Updated At',
                    'Employee Name',
                    'POS Name',
                    'Partner Name'
                ]
            },
            {
                info: 'Underwriting Approval',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'City/Pincode',
                    'Sum Insured Amt',
                    'Insured Member',
                    'CKyc Status',
                    'Insurer',
                    'Premium',
                    'Status',
                    'Updated At',
                    'Employee Name',
                    'POS Name',
                    'Partner Name'
                ]
            },
            {
                info: 'Issued',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'City/Pincode',
                    'Sum Insured Amt',
                    'Insured Member',
                    'CKyc Status',
                    'Insurer',
                    'Premium',
                    'Status',
                    'Updated At',
                    'Employee Name',
                    'POS Name',
                    'Partner Name'
                ]
            }
        ]
    },
    {
        statusOf: 'renewal',
        info: [
            {
                info: 'Quotes',
                count: 0
            },
            {
                info: 'Redirectios',
                count: 0
            },
            {
                info: 'Proposal Pending',
                count: 0
            },
            {
                info: 'Payment Pending',
                count: 0
            },
            {
                info: 'Booking Pending',
                count: 0
            },
            {
                info: 'Inspection',
                count: 0
            },
            {
                info: 'Underwriting Approval',
                count: 0
            },
            {
                info: 'Issued',
                count: 0
            }
        ]
    },
    {
        statusOf: 'super_topup',
        info: [
            {
                info: 'Quotes',
                count: 0
            },
            {
                info: 'Redirectios',
                count: 0
            },
            {
                info: 'Proposal Pending',
                count: 0
            },
            {
                info: 'Payment Pending',
                count: 0
            },
            {
                info: 'Booking Pending',
                count: 0
            },
            {
                info: 'Inspection',
                count: 0
            },
            {
                info: 'Underwriting Approval',
                count: 0
            },
            {
                info: 'Issued',
                count: 0
            }
        ]
    },
    {
        statusOf: 'term',
        info: [
            {
                info: 'Quotes',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Updated At',
                    'Employee Name',
                    'POS Name',
                    'Partner Name',
                    'Reg No',
                    'Action'
                ]
            },
            {
                info: 'Redirectios',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'City/Pincode',
                    'CKyc Status',
                    'Insurer',
                    'Premium',
                    'Updated At',
                    'Employee Name',
                    'POS Name',
                    'Partner Name',
                    'Action'
                ]
            },
            {
                info: 'Proposal Pending',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'CKyc Status',
                    'Insurer',
                    'Premium',
                    'Updated At',
                    'Employee Name',
                    'POS Name',
                    'Partner Name',
                    'Action'
                ]
            },
            {
                info: 'Payment Pending',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'CKyc Status',
                    'Insurer',
                    'Premium',
                    'Updated At',
                    'Employee Name',
                    'POS Name',
                    'Partner Name',
                    'Action'
                ]
            },
            {
                info: 'Booking Pending',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'CKyc Status',
                    'Insurer',
                    'Premium',
                    'Status',
                    'Updated At',
                    'Employee Name',
                    'POS Name',
                    'Partner Name',
                    'Action'
                ]
            },
            {
                info: 'Underwriting Approval',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Email',
                    'City/Pincode',
                    'Sum Insured Amt.',
                    'Premium',
                    'CKyc Status',
                    'Status',
                    'Updated At',
                    'Employee Name',
                    'POS Name',
                    'Partner Name'
                ]
            },
            {
                info: 'Issued',
                count: 0,
                tableColumn: [
                    'Trace ID',
                    'Customer Name',
                    'Mobile No',
                    'Policy Issue Date',
                    'CKyc Status',
                    'City/Pincode',
                    'Insurer',
                    'Premium',
                    'Employee Name',
                    'Policy',
                    'Action'
                ]
            }
        ]
    }
]
