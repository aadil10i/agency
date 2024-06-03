import { Button } from "@saasfly/ui/button";
import { Card, CardContent } from "@saasfly/ui/card";
import { Input } from "@saasfly/ui/input";
import { Label } from "@saasfly/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@saasfly/ui/select";
import { Textarea } from "@saasfly/ui/text-area";

export default function ContactForm() {
  return (
    <div className="flex h-full items-center justify-center">
      <Card className="p-8">
        <CardContent>
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Contact Us</h2>
              <p className="text-zinc-500 dark:text-zinc-400">
                Fill out the form below and well get back to you as soon as
                possible.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name *</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name *</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" placeholder="Enter your Phone Number" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input
                    id="company-name"
                    placeholder="Enter your company name"
                  />
                </div>
                {/* <div className="space-y-2">
                  <Label htmlFor="monthly-budget">Monthly Budget *</Label>
                  <Input
                    id="monthly-budget"
                    placeholder="Enter your monthly budget"
                  />
                </div> */}
                <div className="space-y-2">
                  <Label>Monthly Budget *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="website-development">
                          USD 1,000 - 2,000
                        </SelectItem>
                        <SelectItem value="social-media">
                          USD 2,000 - 3,000
                        </SelectItem>
                        <SelectItem value="Both-Services">
                          USD 3,000+
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pronoun">Services You Are Interested in</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="website-development">
                        Website Development
                      </SelectItem>
                      <SelectItem value="social-media">
                        Social Media Marketing
                      </SelectItem>
                      <SelectItem value="Both-Services">
                        Both Services
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                {/* <textarea
                  className="min-h-[100px]"
                  id="message"
                  placeholder="Enter your message"
                /> */}
                <Textarea
                  className="min-h-[100px]"
                  id="message"
                  placeholder="Enter your message"
                ></Textarea>
              </div>
              <Button type="submit">Send message</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
