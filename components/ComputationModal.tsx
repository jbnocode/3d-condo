'use client';

import { useState } from 'react';
import { X, Download, MessageCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^(\+63|0)?9\d{9}$/, 'Invalid Philippine phone number'),
  monthlyIncome: z.number().min(10000, 'Minimum monthly income is ₱10,000'),
  loanTerm: z.enum(['5', '10', '15', '20', '25']),
  downPaymentPct: z.number().min(10).max(30),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must consent to data processing' }),
  }),
});

type FormData = z.infer<typeof formSchema>;

interface ComputationModalProps {
  property: {
    title: string;
    price: number;
  };
  agent: {
    name: string;
    whatsapp: string;
  };
  onClose: () => void;
}

export default function ComputationModal({ property, agent, onClose }: ComputationModalProps) {
  const [showResult, setShowResult] = useState(false);
  const [downPayment, setDownPayment] = useState(20);
  const [computation, setComputation] = useState<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loanTerm: '20',
      downPaymentPct: 20,
    },
  });

  const loanTerm = watch('loanTerm');

  const calculateAmortization = (data: FormData) => {
    const price = property.price;
    const downPaymentAmount = price * (data.downPaymentPct / 100);
    const loanAmount = price - downPaymentAmount;
    const annualRate = 0.065; // 6.5% typical PH bank rate
    const monthlyRate = annualRate / 12;
    const months = parseInt(data.loanTerm) * 12;

    const monthlyPayment =
      loanAmount *
      (monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    return {
      price,
      downPaymentAmount,
      loanAmount,
      monthlyPayment,
      interestRate: annualRate * 100,
      loanTermYears: parseInt(data.loanTerm),
    };
  };

  const onSubmit = (data: FormData) => {
    const result = calculateAmortization(data);
    setComputation({ ...result, leadData: data });
    setShowResult(true);

    // TODO: Save lead to database
    console.log('Lead captured:', data);
  };

  const handleDownloadPDF = () => {
    // TODO: Generate PDF with jsPDF
    alert('PDF generation coming soon!');
  };

  const handleContactAgent = () => {
    const message = encodeURIComponent(
      `Hi ${agent.name}, I'm interested in ${property.title}. Can we discuss the payment terms?`
    );
    window.open(`https://wa.me/${agent.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full md:w-full md:max-w-2xl bg-white rounded-t-3xl md:rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Drag Handle (mobile only) */}
        <div className="md:hidden flex justify-center pt-3 pb-2">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            {showResult ? 'Your Payment Estimate' : 'Get Your Payment Estimate'}
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          {!showResult ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register('name')}
                  className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Juan Dela Cruz"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+63 917 123 4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {/* Monthly Income */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Monthly Gross Income (₱) *
                </label>
                <input
                  type="number"
                  {...register('monthlyIncome', { valueAsNumber: true })}
                  className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="50000"
                />
                {errors.monthlyIncome && (
                  <p className="mt-1 text-sm text-red-600">{errors.monthlyIncome.message}</p>
                )}
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Term *
                </label>
                <div className="flex gap-2">
                  {['5', '10', '15', '20', '25'].map((years) => (
                    <label
                      key={years}
                      className={`flex-1 h-12 flex items-center justify-center rounded-lg border-2 cursor-pointer transition-colors ${
                        loanTerm === years
                          ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        value={years}
                        {...register('loanTerm')}
                        className="sr-only"
                      />
                      {years}y
                    </label>
                  ))}
                </div>
              </div>

              {/* Down Payment Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment: {downPayment}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="30"
                  step="5"
                  value={downPayment}
                  {...register('downPaymentPct', {
                    valueAsNumber: true,
                    onChange: (e) => setDownPayment(parseInt(e.target.value)),
                  })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>10%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('consent')}
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    I consent to the processing of my personal data (name, phone, financial info)
                    for the purpose of generating a personalized property computation and being
                    contacted by the real estate agent. I understand my data will be stored for 12
                    months. <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-2 text-sm text-red-600">{errors.consent.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl transition-colors active:scale-[0.98]"
              >
                Generate Computation
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              {/* Results */}
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Property Price</p>
                    <p className="text-lg font-semibold">
                      ₱{computation.price.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Down Payment ({downPayment}%)</p>
                    <p className="text-lg font-semibold">
                      ₱{computation.downPaymentAmount.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Loan Amount</p>
                    <p className="text-lg font-semibold">
                      ₱{computation.loanAmount.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Interest Rate</p>
                    <p className="text-lg font-semibold">{computation.interestRate}% p.a.</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-1">Monthly Amortization</p>
                  <p className="text-3xl font-bold text-blue-600">
                    ₱{Math.round(computation.monthlyPayment).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    for {computation.loanTermYears} years
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-gray-500 text-center">
                This is an estimate. Actual rates may vary depending on bank approval and current market rates.
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleDownloadPDF}
                  className="flex-1 h-12 border-2 border-gray-300 hover:border-gray-400 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
                <button
                  onClick={handleContactAgent}
                  className="flex-1 h-12 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center gap-2 font-medium transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact {agent.name.split(' ')[0]}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
