<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServicesTableSeeder extends Seeder
{
    public function run()
    {
        // You can adjust the data as needed
        DB::table('services')->insert([
            'title' => 'Chat with experts',
            'description' => ' Need medical advice or have questions about your health? Our platform allows you to chat with experienced and qualified doctors from the comfort of your home. Get expert guidance and support for your health concerns through our secure and convenient chat feature.
            ',
        ]);

        DB::table('services')->insert([
            'title' => 'Online Appointment',
            'description' => 'Discover the ease of our Online Appointment service. With just a few clicks, you can conveniently schedule your appointments. No more waiting in queues or being on hold. Take control of your schedule and save valuable time with us </p>
            ',
        ]);
        DB::table('services')->insert([
            'title' => 'Track of Treatment',
            'description' => ' Keep your health and well-being in check with our "Track of Treatment" service. We provide a seamless and reliable way for you to monitor your treatment progress. With easy access to your medical records and real-time updates, you can stay informed and actively participate in your healing journey. Take charge of your health with our effective and transparent tracking system.
            ',
        ]);

        // Add more data if needed
    }
}
