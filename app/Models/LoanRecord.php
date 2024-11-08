<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class LoanRecord extends Model
{
    use HasFactory;
    protected $fillable = [
        'loan_record_id',
        'employee_id',
        'purpose',
        'desired_amount',
        'approved_amount',
        'term',
        'net',
        'bi_amortization',
        'interest',
        'basic_salary',
        'balance',
        'remarks',
        'status',
    ];

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class,"employee_id","emp_id");
    }
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class,"employee_id","employee_id");
    }
    public function loan_records(): HasMany
    {
        return $this->hasMany(LoanRecordPayment::class, "loan_record_id", "loan_record_id");
    }
}
