<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class FaqsTableSeeder extends Seeder
{
    public function run()
    {
        // You can adjust the data as needed
        DB::table('faqs')->insert([
            'question' => ' Is self-medication dangerous? How will you ensure patients are checking their blood pressure and sugar correctly?',
            'answer' => ' We prioritize your health and safety. To ensure correct self-monitoring, patients will undergo one week of training under the supervision of a doctor. Alternatively, they will be advised to have their readings regularly checked at a nearby clinic.',
        ]);

        DB::table('faqs')->insert([
            'question' => ' How is the safety of my data guaranteed?',
            'answer' => 'Your data security is of utmost importance to us. We employ state-of-the-art encryption and follow strict privacy protocols to protect your information. Rest assured, your data is in safe hands',
        ]);

        DB::table('faqs')->insert([
            'question' => 'Can I access my medical records online?',
            'answer' => 'Yes, you can easily access your medical records through our secure online portal. This allows you to keep track of your health history and share it with healthcare providers as needed',
        ]);

        DB::table('faqs')->insert([
            'question' => 'How do I book an appointment with a specialist?',
            'answer' => 'Booking an appointment is simple. Just log in to your account, select the specialist you need, and choose a convenient time slot. Our platform will handle the rest, ensuring you get the care you need when you need it.',
        ]);

        DB::table('faqs')->insert([
            'question' => 'What happens if I need urgent medical assistance?',
            'answer' => ' In case of a medical emergency, please call 1122 or visit the nearest hospital. Our platform is not a substitute for emergency medical care but is here to provide guidance and support for non-emergency medical concerns',
        ]);

        // Add more data if needed
    }
}
